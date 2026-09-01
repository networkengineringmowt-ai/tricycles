import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Fix Leaflet default marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const studySites = [
  { name: "Wandegeya Junction", coords: [0.3308, 32.5744], pcu: 1.35, adt: 103899, interaction: "Tricycle-Boda-boda (Motorcycle Taxi)-Non-Motorized Transport (NMT)" },
  { name: "Kibuye Roundabout", coords: [0.2981, 32.5761], pcu: 1.41, adt: 85000, interaction: "Tricycle-Car (Expressway Exit)" },
  { name: "Bakuli Intersection", coords: [0.3114, 32.5669], pcu: 1.32, adt: 65000, interaction: "Tricycle-Bus (Hub)" },
  { name: "Bwaise Junction", coords: [0.3458, 32.5611], pcu: 1.45, adt: 45000, interaction: "Tricycle-Non-Motorized Transport (NMT) (Flood Zone)" },
  { name: "Natete Junction", coords: [0.3014, 32.5469], pcu: 1.36, adt: 72000, interaction: "Tricycle-Public Service Vehicle (PSV/Minibus) Hub" }
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
  ink: '#1d1d1f', sub: '#6e6e73', faint: '#86868b', canvas: '#f5f5f7', card: '#ffffff',
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
const OverviewTab = () => {
  const [selectedSite, setSelectedSite] = useState(null);
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || '/';
    fetch(`${baseUrl}assets/kampala_roads.geojson`)
      .then(res => res.json())
      .then(data => setGeoData(data))
      .catch(err => console.error('Error loading geojson:', err));
  }, []);

  const totalAdt = studySites.reduce((s, x) => s + x.adt, 0);
  const meanPcu = studySites.reduce((s, x) => s + x.pcu, 0) / studySites.length;
  const busiest = studySites.reduce((a, b) => (b.adt > a.adt ? b : a));
  const highestPcu = studySites.reduce((a, b) => (b.pcu > a.pcu ? b : a));

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

        .a-site-list { display: flex; flex-direction: column; gap: 8px; margin-top: 14px; }
        .a-site-chip { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 12px; background: ${C.canvas}; cursor: pointer; transition: background .15s ease; border: 1px solid transparent; }
        .a-site-chip:hover { background: #ececee; }
        .a-site-chip.active { background: ${hex2rgba(C.blue, 0.1)}; border-color: ${hex2rgba(C.blue, 0.35)}; }
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
      `}</style>

      <div className="apple-overview-inner">

        {/* HERO */}
        <div className="a-hero">
          <p className="a-hero-eyebrow">Geospatial Study Console</p>
          <h1 className="a-hero-title">Network Overview</h1>
          <p className="a-hero-sub">Five case-study intersections across the Kampala City road network, mapped and instrumented for the Tricycle Passenger Car Unit (PCU) survey.</p>
        </div>

        {/* KPI STRIP */}
        <div className="a-kpi-grid">
          <KpiCard icon="fa-location-dot" color={C.blue} label="Study Intersections" value="5" sub="Kampala City road network" />
          <KpiCard icon="fa-car-side" color={C.indigo} label="Combined AADT (2021)" value={totalAdt.toLocaleString()} sub="veh/day, all sites" />
          <KpiCard icon="fa-gauge-high" color={C.teal} label="Mean Base PCU (Eq. 2)" value={meanPcu.toFixed(2)} sub="Range 1.32 – 1.45" />
          <KpiCard icon="fa-fire" color={C.orange} label="Busiest Site" value={busiest.name.replace(' Junction', '').replace(' Roundabout', '').replace(' Intersection', '')} sub={`${busiest.adt.toLocaleString()} veh/day AADT`} />
          <KpiCard icon="fa-triangle-exclamation" color={C.red} label="Highest-Friction Site" value={highestPcu.name.replace(' Junction', '').replace(' Roundabout', '').replace(' Intersection', '')} sub={`PCU ${highestPcu.pcu} · flood-zone NMT conflict`} />
          <KpiCard icon="fa-ruler-horizontal" color={C.purple} label="VISSIM Standstill Distance" value="0.65 m" sub="Parameter aₓ, all sites" />
        </div>

        {/* MAP + SITE DETAIL */}
        <div className="a-grid">
          <div className="a-card s-8">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <SectionHeader eyebrow="Study Area" title="Interactive Case Study Map" color={C.blue} />
              <div className="a-toggle-row">
                <button className="a-toggle-btn active"><i className="fa-solid fa-sun" style={{ marginRight: '6px' }}></i>Dry</button>
                <button className="a-toggle-btn"><i className="fa-solid fa-cloud-showers-heavy" style={{ marginRight: '6px' }}></i>Wet</button>
              </div>
            </div>
            <div className="a-map-wrap">
              <MapContainer bounds={[[0.2981, 32.5469], [0.3458, 32.5761]]} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                {geoData && <GeoJSON data={geoData} style={{ color: C.indigo, weight: 2, opacity: 0.55 }} />}
                {studySites.map((site, idx) => (
                  <Marker
                    key={idx}
                    position={site.coords}
                    eventHandlers={{ click: () => setSelectedSite(site) }}
                  >
                    <Popup>
                      <strong style={{ color: '#000' }}>{site.name}</strong><br />
                      <span style={{ color: '#333' }}>PCU: {site.pcu}</span>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Site Detail" title={selectedSite ? selectedSite.name : 'Select a study site'} color={C.indigo} />
            <div className="a-site-list">
              {studySites.map((site, idx) => (
                <div
                  key={idx}
                  className={`a-site-chip ${selectedSite?.name === site.name ? 'active' : ''}`}
                  onClick={() => setSelectedSite(site)}
                >
                  <span className="a-site-dot" style={{ background: SITE_COLORS[idx] }}></span>
                  <div>
                    <div className="a-site-chip-name">{site.name}</div>
                    <div className="a-site-chip-sub">PCU {site.pcu} · {site.adt.toLocaleString()} veh/day</div>
                  </div>
                </div>
              ))}
            </div>
            {selectedSite && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
                <div className="a-stat-box">
                  <div className="a-stat-label">Annual Average Daily Traffic (AADT) — 2021</div>
                  <div className="a-stat-value" style={{ color: C.blue }}>{selectedSite.adt.toLocaleString()}</div>
                </div>
                <div className="a-stat-box">
                  <div className="a-stat-label">Base PCU (Eq. 2)</div>
                  <div className="a-stat-value" style={{ color: C.indigo }}>{selectedSite.pcu}</div>
                </div>
                <div className="a-stat-box">
                  <div className="a-stat-label">Primary Vehicle Interaction</div>
                  <div className="a-sub" style={{ margin: 0, fontWeight: 600, color: C.ink }}>{selectedSite.interaction}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CHARTS: AADT + PCU by site */}
        <div className="a-grid">
          <div className="a-card s-6">
            <SectionHeader eyebrow="Baseline Volume" title="AADT by Study Site" color={C.blue} sub="Annual Average Daily Traffic, 2021 baseline (veh/day)" />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: studySites.map(s => s.name),
                  datasets: [{ label: 'AADT (veh/day)', data: studySites.map(s => s.adt), backgroundColor: SITE_COLORS, borderRadius: 8 }]
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
            <SectionHeader eyebrow="Field Results" title="Base PCU by Study Site" color={C.indigo} sub="Equation 2 baseline Passenger Car Unit value" />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: studySites.map(s => s.name),
                  datasets: [{ label: 'Base PCU', data: studySites.map(s => s.pcu), backgroundColor: SITE_COLORS, borderRadius: 8 }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { y: { min: 1.2, grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } }, x: { grid: { display: false }, ticks: { color: chartSub, font: { size: 9.5 } } } },
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
                    <div className="a-directory-meta-item">AADT<span className="a-directory-meta-val">{site.adt.toLocaleString()}</span></div>
                    <div className="a-directory-meta-item">PCU<span className="a-directory-meta-val">{site.pcu}</span></div>
                  </div>
                  <p className="a-directory-interaction">{site.interaction}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OverviewTab;
