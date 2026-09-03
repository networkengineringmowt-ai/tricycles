import React, { useState, useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON, LayersControl, LayerGroup, ScaleControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import PageControls, { downloadTextFile } from './PageControls';
import MethodologyPanel from './MethodologyPanel';
import useTrafficStats from '../lib/useTrafficStats';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Fix Leaflet default marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom Leaflet control (no extra dependency) that toggles the browser's
// native fullscreen mode on the map container -- mirrors Leaflet's own
// L.Control.Zoom construction so it inherits the same leaflet-bar styling.
const MapFullscreenControl = () => {
  const map = useMap();
  useEffect(() => {
    const mapEl = map.getContainer();
    const FullscreenControl = L.Control.extend({
      onAdd: function () {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control');
        const link = L.DomUtil.create('a', 'a-map-fullscreen-btn', container);
        link.href = '#';
        link.title = 'Toggle fullscreen map';
        link.setAttribute('role', 'button');
        link.setAttribute('aria-label', 'Toggle fullscreen map');
        link.innerHTML = '<i class="fa-solid fa-expand" aria-hidden="true"></i>';
        L.DomEvent.disableClickPropagation(container);
        L.DomEvent.on(link, 'click', (e) => {
          L.DomEvent.preventDefault(e);
          if (!document.fullscreenElement) {
            mapEl.requestFullscreen?.();
          } else {
            document.exitFullscreen?.();
          }
        });
        return container;
      },
    });
    const control = new FullscreenControl({ position: 'topleft' });
    control.addTo(map);
    return () => control.remove();
  }, [map]);
  return null;
};

// Geographic position + qualitative interaction description only -- every
// numeric figure (volume, tricycle share, PCU) is computed live from real
// field data by useTrafficStats() below, never hand-typed here.
const SITE_GEO = [
  { name: "Wandegeya Junction", coords: [0.3308, 32.5744], interaction: "Tricycle-Boda-boda (Motorcycle Taxi)-Non-Motorized Transport (NMT)" },
  { name: "Kibuye Roundabout", coords: [0.2981, 32.5761], interaction: "Tricycle-Car (Expressway Exit)" },
  { name: "Bakuli Intersection", coords: [0.3114, 32.5669], interaction: "Tricycle-Bus (Hub)" },
  { name: "Bwaise Junction", coords: [0.3458, 32.5611], interaction: "Tricycle-Non-Motorized Transport (NMT) (Flood Zone)" },
  { name: "Natete Junction", coords: [0.3014, 32.5469], interaction: "Tricycle-Public Service Vehicle (PSV/Minibus) Hub" }
];

// ---------------------------------------------------------------------------
// Apple-style design tokens (bright, light, system-color palette) — same
// tokens used across the Overview / Summary Tables / Analytics tabs so the
// three redesigned views feel like one product.
// ---------------------------------------------------------------------------
const C = {
  blue: '#0071e3', blue2: '#0a84ff', green: '#30d158', orange: '#ff9f0a',
  red: '#ff453a', purple: '#bf5af2', pink: '#ff375f', teal: '#40c8e0',
  yellow: '#ffd60a', indigo: '#5e5ce6',
  ink: '#1d1d1f', sub: '#6e6e73', faint: '#707074', canvas: '#f5f5f7', card: '#ffffff',
};
const hex2rgba = (hex, a) => {
  const r = parseInt(hex.slice(1, 3), 16), g = parseInt(hex.slice(3, 5), 16), b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
};
const chartSub = C.faint;
const chartGrid = 'rgba(0,0,0,0.06)';
const animConfig = { duration: 800, easing: 'easeOutQuart' };
const tooltipTheme = {
  backgroundColor: '#1d1d1f', titleColor: '#ffffff', bodyColor: '#f5f5f7',
  padding: 10, cornerRadius: 10, titleFont: { weight: '600' }, displayColors: true, boxPadding: 4,
};
const legendTheme = { labels: { color: chartSub, boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11, weight: '600' }, usePointStyle: true, pointStyle: 'circle' } };
const SITE_COLORS = [C.blue, C.indigo, C.teal, C.orange, C.purple];

const SectionHeader = ({ eyebrow, title, color = C.blue, sub }) => (
  <div style={{ marginBottom: '18px' }}>
    <p className="a-eyebrow" style={{ color }}>{eyebrow}</p>
    <h3 className="a-title">{title}</h3>
    {sub && <p className="a-sub">{sub}</p>}
  </div>
);

const KpiCard = ({ icon, color, label, value, sub }) => (
  <div className="a-card a-kpi">
    <div className="a-kpi-icon" style={{ background: hex2rgba(color, 0.14), color }}>
      <i className={`fa-solid ${icon}`}></i>
    </div>
    <div className="a-kpi-value">{value}</div>
    <div className="a-kpi-label">{label}</div>
    {sub && <div className="a-kpi-sub">{sub}</div>}
  </div>
);

// ---------------------------------------------------------------------------
const OverviewTab = ({ goBack, canGoBack } = {}) => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [geoData, setGeoData] = useState(null);
  const [weatherView, setWeatherView] = useState('Dry');
  const stats = useTrafficStats();

  // Merge static geo/interaction info with the live-computed per-site
  // figures from useTrafficStats() -- this is the single place the two are
  // joined, so every chart/card below reads from one consistent source.
  const studySites = useMemo(() => {
    if (!stats) return null;
    return SITE_GEO.map((geo) => {
      const s = stats.byIntersection[geo.name] || {};
      return {
        ...geo,
        meanDailyVolume: s.meanDailyVolume,
        tricycleSharePct: s.tricycleSharePct,
        pcuHeadway: stats.pcuByIntersection[geo.name]?.pcuHeadway,
        meanIntervalVolumeDry: s.meanIntervalVolumeDry,
        meanIntervalVolumeWet: s.meanIntervalVolumeWet,
      };
    });
  }, [stats]);

  const exportSites = () => {
    if (!studySites) return;
    const header = 'Study Site,Latitude,Longitude,Mean Daily Volume (2026 field sample),Tricycle Share (%),PCU (headway-ratio method),Dominant Interaction';
    const lines = studySites.map(s =>
      `"${s.name}",${s.coords[0]},${s.coords[1]},${Math.round(s.meanDailyVolume)},${s.tricycleSharePct.toFixed(2)},${s.pcuHeadway.toFixed(3)},"${s.interaction}"`
    );
    downloadTextFile('tricycle_pcu_study_sites.csv', [header, ...lines].join('\n'));
  };

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    fetch(`${baseUrl}assets/kampala_roads.geojson`)
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error('Error loading geojson:', err));
  }, []);

  const totalVolume = studySites ? studySites.reduce((s, x) => s + x.meanDailyVolume, 0) : 0;
  const busiest = studySites && stats ? studySites.find(s => s.name === stats.busiestIntersection) : null;
  const highestTricycle = studySites && stats ? studySites.find(s => s.name === stats.highestTricycleShareIntersection) : null;
  const weatherDelta = stats ? stats.weatherTest.pctChange : null;

  const chipVolume = (site) => (weatherView === 'Dry' ? site.meanIntervalVolumeDry : site.meanIntervalVolumeWet);

  return (
    <div className="apple-overview">
      <style>{`
        .apple-overview { position: relative; width: 100vw; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: ${C.canvas}; padding: 44px 0 90px; }
        .apple-overview-inner { max-width: 1440px; margin: 0 auto; padding: 0 32px; font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif; color: ${C.ink}; }
        .a-hero { text-align: center; max-width: 760px; margin: 0 auto 40px; }
        .a-hero-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${C.blue}; margin: 0 0 10px; }
        .a-hero-title { font-size: clamp(2.1rem, 4vw, 3.4rem); font-weight: 800; letter-spacing: -0.03em; margin: 0 0 12px; line-height: 1.05;
          background: linear-gradient(90deg, ${C.blue}, ${C.teal} 50%, ${C.green}); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .a-hero-sub { font-size: 1.05rem; color: ${C.sub}; margin: 0; line-height: 1.5; }

        .a-card { background: ${C.card}; border-radius: 22px; padding: 26px; box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 12px 28px -12px rgba(0,0,0,0.10); border: 1px solid rgba(0,0,0,0.045); display: flex; flex-direction: column; transition: transform .25s ease, box-shadow .25s ease; }
        .a-card:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 20px 36px -14px rgba(0,0,0,0.14); }

        .a-eyebrow { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; margin: 0 0 4px; }
        .a-title { font-size: 1.32rem; font-weight: 700; letter-spacing: -0.01em; margin: 0; color: ${C.ink}; }
        .a-sub { font-size: 0.85rem; color: ${C.sub}; margin: 6px 0 0; line-height: 1.5; }
        .a-footnote { font-size: 0.75rem; color: ${C.faint}; margin: 10px 0 0; line-height: 1.5; }

        .a-kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 22px; }
        .a-kpi { padding: 22px; gap: 10px; }
        .a-kpi-icon { width: 42px; height: 42px; border-radius: 13px; display: flex; align-items: center; justify-content: center; font-size: 17px; margin-bottom: 4px; }
        .a-kpi-value { font-size: 1.55rem; font-weight: 800; letter-spacing: -0.02em; color: ${C.ink}; font-feature-settings: "tnum" 1; }
        .a-kpi-label { font-size: 0.72rem; font-weight: 700; color: ${C.sub}; text-transform: uppercase; letter-spacing: 0.03em; }
        .a-kpi-sub { font-size: 0.76rem; color: ${C.faint}; margin-top: -2px; }

        .a-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; margin-bottom: 20px; }
        .s-4 { grid-column: span 4; } .s-5 { grid-column: span 5; } .s-6 { grid-column: span 6; }
        .s-7 { grid-column: span 7; } .s-8 { grid-column: span 8; } .s-12 { grid-column: span 12; }
        @media (max-width: 1080px) { .a-grid .s-4, .a-grid .s-5, .a-grid .s-6, .a-grid .s-7, .a-grid .s-8 { grid-column: span 12; } }

        .a-chart-box { flex: 1; min-height: 260px; position: relative; width: 100%; margin-top: 10px; }

        .a-toggle-row { display: flex; gap: 8px; }
        .a-toggle-btn { border: 1px solid rgba(0,0,0,0.08); background: #fff; color: ${C.sub}; font-weight: 600; font-size: 0.82rem; padding: 8px 14px; border-radius: 10px; cursor: pointer; transition: all .15s ease; }
        .a-toggle-btn.active { background: ${C.ink}; color: #fff; border-color: ${C.ink}; }
        .a-toggle-btn:hover:not(.active) { background: #f5f5f7; }

        .a-map-wrap { height: 400px; border-radius: 16px; overflow: hidden; margin-top: 16px; border: 1px solid rgba(0,0,0,0.06); }
        .a-map-fullscreen-btn { display: flex; align-items: center; justify-content: center; font-size: 14px; }
        .leaflet-container:fullscreen { width: 100%; height: 100%; }

        .a-site-list { display: flex; flex-direction: column; gap: 8px; margin-top: 14px; }
        .a-site-chip { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 12px; background: ${C.canvas}; cursor: pointer; transition: background .15s ease; border: 1px solid transparent; width: 100%; text-align: left; font: inherit; }
        .a-site-chip:hover { background: #ececee; }
        .a-site-chip.active { background: ${hex2rgba(C.blue, 0.1)}; border-color: ${hex2rgba(C.blue, 0.35)}; }
        .a-site-chip:focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }
        .a-site-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
        .a-site-chip-name { font-size: 0.82rem; font-weight: 600; color: ${C.ink}; }
        .a-site-chip-sub { font-size: 0.7rem; color: ${C.faint}; }

        .a-stat-box { background: ${C.canvas}; border-radius: 14px; padding: 14px 16px; }
        .a-stat-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em; color: ${C.faint}; margin-bottom: 4px; }
        .a-stat-value { font-size: 1.3rem; font-weight: 800; color: ${C.ink}; font-feature-settings: "tnum" 1; }

        .a-directory-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 14px; margin-top: 6px; }
        .a-directory-card { background: ${C.canvas}; border-radius: 16px; padding: 18px; border-top: 3px solid; }
        .a-directory-name { font-size: 0.95rem; font-weight: 800; color: ${C.ink}; margin: 0 0 6px; }
        .a-directory-meta { display: flex; gap: 14px; margin-bottom: 8px; }
        .a-directory-meta-item { font-size: 0.68rem; color: ${C.faint}; font-weight: 700; text-transform: uppercase; }
        .a-directory-meta-val { font-size: 0.95rem; color: ${C.ink}; font-weight: 800; display: block; margin-top: 2px; text-transform: none; }
        .a-directory-interaction { font-size: 0.76rem; color: ${C.sub}; line-height: 1.5; }

        .a-loading { padding: 40px; text-align: center; color: ${C.faint}; font-size: 0.9rem; }

        .a-methodology { margin-top: 4px; }
        .a-methodology-toggle { display: flex; align-items: center; justify-content: space-between; width: 100%; background: none; border: none; font: inherit; font-weight: 700; font-size: 0.92rem; color: ${C.ink}; cursor: pointer; padding: 0; }
        .a-methodology-body { margin-top: 16px; }
        .a-methodology-sources { display: flex; flex-direction: column; gap: 6px; }
        .a-methodology-source { font-size: 0.78rem; color: ${C.sub}; line-height: 1.5; }
        .a-methodology-source-tag { display: inline-block; font-size: 0.66rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.03em; color: ${C.blue}; background: ${hex2rgba(C.blue, 0.1)}; padding: 2px 7px; border-radius: 6px; margin-right: 6px; }
        .a-methodology-table { width: 100%; border-collapse: separate; border-spacing: 0 6px; font-size: 0.78rem; }
        .a-methodology-table th { text-align: left; color: ${C.faint}; font-weight: 700; font-size: 0.66rem; text-transform: uppercase; letter-spacing: 0.02em; padding-bottom: 6px; }
        .a-methodology-table td { background: ${C.canvas}; padding: 10px 10px; vertical-align: top; }
        .a-methodology-table td:first-child { border-radius: 10px 0 0 10px; font-weight: 700; }
        .a-methodology-table td:last-child { border-radius: 0 10px 10px 0; white-space: nowrap; }
        .a-methodology-key { font-family: ui-monospace, monospace; font-size: 0.72rem; }
      `}</style>

      <PageControls onBack={goBack} canGoBack={canGoBack} exportLabel="Export Site Data (CSV)" onExport={exportSites} />

      <div className="apple-overview-inner">

        {/* HERO */}
        <div className="a-hero">
          <p className="a-hero-eyebrow">Geospatial Study Console</p>
          <h1 className="a-hero-title">Network Overview</h1>
          <p className="a-hero-sub">Five case-study intersections across the Kampala City road network, mapped and instrumented for the Tricycle Passenger Car Unit (PCU) survey.</p>
        </div>

        {!stats || !studySites ? (
          <div className="a-loading"><i className="fa-solid fa-circle-notch fa-spin" style={{ marginRight: '8px' }}></i>Computing live figures from field data…</div>
        ) : (
        <>
        {/* KPI STRIP */}
        <div className="a-kpi-grid">
          <KpiCard icon="fa-location-dot" color={C.blue} label="Study Intersections" value="5" sub="Kampala City road network" />
          <KpiCard icon="fa-car-side" color={C.indigo} label="Combined Daily Volume" value={Math.round(totalVolume).toLocaleString()} sub="veh/day, 20-day field sample, 2026" />
          <KpiCard icon="fa-gauge-high" color={C.teal} label="Mean PCU (headway-ratio)" value={stats.pcuHeadwayOverall.toFixed(2)} sub={`Range ${Math.min(...studySites.map(s=>s.pcuHeadway)).toFixed(2)} – ${Math.max(...studySites.map(s=>s.pcuHeadway)).toFixed(2)}`} />
          <KpiCard icon="fa-fire" color={C.orange} label="Busiest Site" value={stats.shortName(busiest.name)} sub={`${Math.round(busiest.meanDailyVolume).toLocaleString()} veh/day mean`} />
          <KpiCard icon="fa-route" color={C.pink} label="Highest Tricycle Share" value={stats.shortName(highestTricycle.name)} sub={`${highestTricycle.tricycleSharePct.toFixed(1)}% of site volume`} />
          <KpiCard icon="fa-cloud-showers-heavy" color={C.red} label="Wet-Weather Volume Impact" value={`${weatherDelta.toFixed(1)}%`} sub="vs Dry-weather intervals" />
        </div>

        {/* MAP + SITE DETAIL */}
        <div className="a-grid">
          <div className="a-card s-8">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <SectionHeader eyebrow="Study Area" title="Interactive Case Study Map" color={C.blue} />
              <div className="a-toggle-row" role="group" aria-label="Weather condition for site volume figures">
                <button
                  type="button"
                  className={`a-toggle-btn ${weatherView === 'Dry' ? 'active' : ''}`}
                  aria-pressed={weatherView === 'Dry'}
                  onClick={() => setWeatherView('Dry')}
                ><i className="fa-solid fa-sun" style={{ marginRight: '6px' }}></i>Dry</button>
                <button
                  type="button"
                  className={`a-toggle-btn ${weatherView === 'Wet' ? 'active' : ''}`}
                  aria-pressed={weatherView === 'Wet'}
                  onClick={() => setWeatherView('Wet')}
                ><i className="fa-solid fa-cloud-showers-heavy" style={{ marginRight: '6px' }}></i>Wet</button>
              </div>
            </div>
            <div className="a-map-wrap">
              <MapContainer bounds={[[0.2981, 32.5469], [0.3458, 32.5761]]} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  maxZoom={19}
                />
                <ScaleControl position="bottomleft" metric imperial />
                <MapFullscreenControl />
                <LayersControl position="topright" collapsed={true}>
                  <LayersControl.Overlay checked name="Road Network">
                    {geoData ? <GeoJSON data={geoData} style={{ color: C.indigo, weight: 2, opacity: 0.55 }} /> : <LayerGroup />}
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name="Study Site Markers">
                    <LayerGroup>
                      {studySites.map((site, idx) => (
                        <Marker
                          key={idx}
                          position={site.coords}
                          eventHandlers={{ click: () => setSelectedSite(site) }}
                        >
                          <Popup>
                            <strong style={{ color: '#000' }}>{site.name}</strong><br />
                            <span style={{ color: '#333' }}>{weatherView} mean volume: {Math.round(chipVolume(site)).toLocaleString()} veh/15-min</span>
                          </Popup>
                        </Marker>
                      ))}
                    </LayerGroup>
                  </LayersControl.Overlay>
                </LayersControl>
              </MapContainer>
            </div>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Site Detail" title={selectedSite ? selectedSite.name : 'Select a study site'} color={C.indigo} />
            <div className="a-site-list">
              {studySites.map((site, idx) => (
                <button
                  type="button"
                  key={idx}
                  className={`a-site-chip ${selectedSite?.name === site.name ? 'active' : ''}`}
                  onClick={() => setSelectedSite(site)}
                >
                  <span className="a-site-dot" style={{ background: SITE_COLORS[idx] }}></span>
                  <div>
                    <div className="a-site-chip-name">{site.name}</div>
                    <div className="a-site-chip-sub">PCU {site.pcuHeadway.toFixed(2)} · {Math.round(site.meanDailyVolume).toLocaleString()} veh/day</div>
                  </div>
                </button>
              ))}
            </div>
            {selectedSite && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
                <div className="a-stat-box">
                  <div className="a-stat-label">Mean Daily Volume — 20-day field sample, 2026</div>
                  <div className="a-stat-value" style={{ color: C.blue }}>{Math.round(selectedSite.meanDailyVolume).toLocaleString()}</div>
                </div>
                <div className="a-stat-box">
                  <div className="a-stat-label">PCU (headway-ratio method)</div>
                  <div className="a-stat-value" style={{ color: C.indigo }}>{selectedSite.pcuHeadway.toFixed(3)}</div>
                </div>
                <div className="a-stat-box">
                  <div className="a-stat-label">Tricycle Share of Volume</div>
                  <div className="a-stat-value" style={{ color: C.green }}>{selectedSite.tricycleSharePct.toFixed(1)}%</div>
                </div>
                <div className="a-stat-box">
                  <div className="a-stat-label">Primary Vehicle Interaction</div>
                  <div className="a-sub" style={{ margin: 0, fontWeight: 600, color: C.ink }}>{selectedSite.interaction}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CHARTS: Daily volume + PCU by site */}
        <div className="a-grid">
          <div className="a-card s-6">
            <SectionHeader eyebrow="Baseline Volume" title="Mean Daily Volume by Study Site" color={C.blue} sub="20-day field sample, 2026 (veh/day)" />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: studySites.map(s => s.name),
                  datasets: [{ label: 'Mean daily volume (veh/day)', data: studySites.map(s => Math.round(s.meanDailyVolume)), backgroundColor: SITE_COLORS, borderRadius: 8 }]
                }}
                options={{
                  indexAxis: 'y', animation: animConfig, maintainAspectRatio: false,
                  scales: { x: { grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } }, y: { grid: { display: false }, ticks: { color: chartSub, font: { size: 10.5 } } } },
                  plugins: { legend: { display: false }, tooltip: tooltipTheme }
                }}
              />
            </div>
          </div>
          <div className="a-card s-6">
            <SectionHeader eyebrow="Field Results" title="PCU by Study Site (headway-ratio)" color={C.indigo} sub="PCU = mean tricycle headway ÷ mean car headway, 7-day baseline dataset" />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: studySites.map(s => s.name),
                  datasets: [{ label: 'PCU (headway-ratio)', data: studySites.map(s => Number(s.pcuHeadway.toFixed(3))), backgroundColor: SITE_COLORS, borderRadius: 8 }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { y: { min: 1.2, max: 1.4, grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } }, x: { grid: { display: false }, ticks: { color: chartSub, font: { size: 9.5 } } } },
                  plugins: { legend: { display: false }, tooltip: tooltipTheme }
                }}
              />
            </div>
          </div>
        </div>

        {/* SITE DIRECTORY */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="At a Glance" title="Study Site Directory" color={C.teal} sub="Primary mixed-traffic interaction observed at each intersection" />
            <div className="a-directory-grid">
              {studySites.map((site, idx) => (
                <div className="a-directory-card" key={idx} style={{ borderTopColor: SITE_COLORS[idx] }}>
                  <p className="a-directory-name">{site.name}</p>
                  <div className="a-directory-meta">
                    <div className="a-directory-meta-item">Veh/Day<span className="a-directory-meta-val">{Math.round(site.meanDailyVolume).toLocaleString()}</span></div>
                    <div className="a-directory-meta-item">PCU<span className="a-directory-meta-val">{site.pcuHeadway.toFixed(2)}</span></div>
                    <div className="a-directory-meta-item">Tricycle %<span className="a-directory-meta-val">{site.tricycleSharePct.toFixed(1)}</span></div>
                  </div>
                  <p className="a-directory-interaction">{site.interaction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* METHODOLOGY */}
        <div className="a-grid">
          <MethodologyPanel color={C.blue} keys={['meanDailyVolume', 'compositionPct', 'pcuHeadway', 'weatherTest']} />
        </div>
        </>
        )}

      </div>
    </div>
  );
};

export default OverviewTab;
