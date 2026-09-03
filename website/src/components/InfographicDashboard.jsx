import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Filler, Tooltip, Legend
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import PageControls, { downloadTextFile } from './PageControls';
import MethodologyPanel from './MethodologyPanel';
import useTrafficStats from '../lib/useTrafficStats';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Filler, Tooltip, Legend
);

// ---------------------------------------------------------------------------
// Apple-style design tokens (bright, light, system-color palette)
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

const chartText = C.ink;
const chartSub = C.faint;
const chartGrid = 'rgba(0,0,0,0.06)';
const animConfig = { duration: 800, easing: 'easeOutQuart' };
const tooltipTheme = {
  backgroundColor: '#1d1d1f',
  titleColor: '#ffffff',
  bodyColor: '#f5f5f7',
  padding: 10,
  cornerRadius: 10,
  titleFont: { weight: '600' },
  displayColors: true,
  boxPadding: 4,
};
const legendTheme = { labels: { color: chartSub, boxWidth: 10, boxHeight: 10, padding: 14, font: { size: 11, weight: '600' }, usePointStyle: true, pointStyle: 'circle' } };
const INCIDENT_COLORS = [C.red, C.orange, C.blue, C.indigo, C.teal, C.purple, C.pink, C.green, C.yellow, '#8e8e93'];

// ---------------------------------------------------------------------------
// Small reusable pieces
// ---------------------------------------------------------------------------
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

const CompareStat = ({ color, leftLabel, leftValue, rightLabel, rightValue, footnote }) => {
  const l = parseFloat(leftValue), r = parseFloat(rightValue);
  const max = Math.max(l, r) || 1;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span className="a-cmp-label">{leftLabel}</span>
          <span className="a-cmp-value" style={{ color }}>{leftValue}</span>
        </div>
        <div className="a-cmp-track"><div className="a-cmp-fill" style={{ width: `${(l / max) * 100}%`, background: color }}></div></div>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
          <span className="a-cmp-label">{rightLabel}</span>
          <span className="a-cmp-value" style={{ color: C.sub }}>{rightValue}</span>
        </div>
        <div className="a-cmp-track"><div className="a-cmp-fill" style={{ width: `${(r / max) * 100}%`, background: '#d2d2d7' }}></div></div>
      </div>
      {footnote && <p className="a-footnote">{footnote}</p>}
    </div>
  );
};

const PhotoCarousel = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return true;
  });
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchStartX = useRef(null);

  const count = photos.length;
  const goTo = (i) => setIndex(((i % count) + count) % count);
  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);

  useEffect(() => {
    if (!isPlaying || hovered || focused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 5500);
    return () => clearInterval(id);
  }, [isPlaying, hovered, focused, count]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
  };

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) { delta < 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
  };

  return (
    <div
      className="a-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Traffic and site data collection photographs"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onKeyDown={handleKeyDown}
    >
      <div
        className="a-carousel-viewport"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="a-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {photos.map((p, i) => (
            <div
              className="a-carousel-slide"
              key={p.title}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${p.title}`}
              aria-hidden={i !== index}
            >
              <img src={p.src} alt={p.title} />
              <div className="a-photo-overlay">
                <p className="a-eyebrow" style={{ color: p.color }}>{p.eyebrow}</p>
                <h3 className="a-photo-title">{p.title}</h3>
                <p className="a-photo-text">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="a-carousel-controls">
          <button type="button" className="a-carousel-arrow a-carousel-prev" aria-label="Previous photo" onClick={goPrev}>
            <i className="fa-solid fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button type="button" className="a-carousel-arrow a-carousel-next" aria-label="Next photo" onClick={goNext}>
            <i className="fa-solid fa-chevron-right" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="a-carousel-playpause"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            aria-pressed={isPlaying}
            onClick={() => setIsPlaying((p) => !p)}
          >
            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`} aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div className="a-carousel-dots" role="tablist" aria-label="Choose photo">
        {photos.map((p, i) => (
          <button
            key={p.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Slide ${i + 1}: ${p.title}`}
            className={`a-carousel-dot${i === index ? ' active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

const pFmt = (p) => (p < 0.001 ? 'p < .001' : `p = ${p.toFixed(3)}`);

// ---------------------------------------------------------------------------
const InfographicDashboard = ({ goBack, canGoBack } = {}) => {
  const stats = useTrafficStats();
  const [vcRatio, setVcRatio] = useState(0.85);
  const [modalShare, setModalShare] = useState(13);
  const [roadWidth, setRoadWidth] = useState(7.0);
  const [defaultsApplied, setDefaultsApplied] = useState(false);

  // Seed the calculator's modal-share default from the real, dynamically
  // computed network tricycle share the first time stats become available.
  useEffect(() => {
    if (stats && !defaultsApplied) {
      setModalShare(Math.round(stats.overallCompositionPct.Tricycles));
      setDefaultsApplied(true);
    }
  }, [stats, defaultsApplied]);

  const exportVolumeTable = () => {
    if (!stats) return;
    const entries = Object.entries(stats.tricycleByIntersection);
    const header = 'Study Site,Mean Tricycle Volume (veh / 15-min interval),Standard Deviation';
    const lines = entries.map(([name, v]) => `"${name}",${v.mean.toFixed(2)},${v.std.toFixed(2)}`);
    downloadTextFile('tricycle_volume_by_intersection.csv', [header, ...lines].join('\n'));
  };

  // Site is served from the /tricycles/ subpath on GitHub Pages, so plain
  // "/assets/..." src strings 404 in production even though they work under
  // `vite dev` — every asset reference below is prefixed with the real base.
  const baseUrl = import.meta.env.BASE_URL || '/';

  // Illustrative capacity-impact model -- explicitly NOT a measured field
  // PCU (no per-vehicle headway exists for arbitrary hypothetical V/C,
  // modal-share and road-width combinations). Anchored to the real,
  // dynamically-computed headway-ratio PCU so its baseline is grounded in
  // field data rather than an arbitrary constant.
  const basePcu = stats ? stats.pcuHeadwayOverall : 1.30;
  const vcPenalty = (vcRatio - 0.5) > 0 ? (vcRatio - 0.5) * 0.25 : 0;
  const modalPenalty = (modalShare - (stats ? stats.overallCompositionPct.Tricycles : 13)) * 0.008;
  const widthBonus = (roadWidth - 7.0) * -0.02;
  const dynamicPcu = (basePcu + vcPenalty + modalPenalty + widthBonus).toFixed(2);
  // delta vs the REAL field baseline (not an arbitrary 1.0 floor) -- this is
  // the illustrative model's own added penalty on top of measured PCU
  const capacityDrop = Math.round(((dynamicPcu - basePcu) / basePcu) * 100);

  const vcRatios = [0.2, 0.4, 0.6, 0.8, 1.0];
  const modalShares = [0.05, 0.10, 0.15, 0.20, 0.25];

  const incidentTypes = useMemo(() => {
    if (!stats) return [];
    return Object.entries(stats.incidentTotalsByType).sort((a, b) => b[1] - a[1]).map(([type]) => type);
  }, [stats]);

  return (
    <div className="apple-dash">
      <style>{`
        .apple-dash { position: relative; width: 100vw; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: ${C.canvas}; padding: 44px 0 90px; }
        .apple-dash-inner { max-width: 1440px; margin: 0 auto; padding: 0 32px; font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif; color: ${C.ink}; }
        .a-hero { text-align: center; max-width: 760px; margin: 0 auto 40px; }
        .a-hero-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${C.blue}; margin: 0 0 10px; }
        .a-hero-title { font-size: clamp(2.1rem, 4vw, 3.4rem); font-weight: 800; letter-spacing: -0.03em; margin: 0 0 12px; line-height: 1.05;
          background: linear-gradient(90deg, ${C.blue}, ${C.purple} 50%, ${C.pink}); -webkit-background-clip: text; background-clip: text; color: transparent; }
        .a-hero-sub { font-size: 1.05rem; color: ${C.sub}; margin: 0; line-height: 1.5; }

        .a-card { background: ${C.card}; border-radius: 22px; padding: 26px; box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 12px 28px -12px rgba(0,0,0,0.10); border: 1px solid rgba(0,0,0,0.045); display: flex; flex-direction: column; transition: transform .25s ease, box-shadow .25s ease; }
        .a-card:hover { transform: translateY(-2px); box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 20px 36px -14px rgba(0,0,0,0.14); }

        .a-eyebrow { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; margin: 0 0 4px; }
        .a-title { font-size: 1.32rem; font-weight: 700; letter-spacing: -0.01em; margin: 0; color: ${C.ink}; }
        .a-sub { font-size: 0.85rem; color: ${C.sub}; margin: 6px 0 0; line-height: 1.5; }
        .a-footnote { font-size: 0.75rem; color: ${C.faint}; margin: 2px 0 0; line-height: 1.5; }

        .a-kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 22px; }
        .a-kpi { padding: 22px; gap: 10px; }
        .a-kpi-icon { width: 42px; height: 42px; border-radius: 13px; display: flex; align-items: center; justify-content: center; font-size: 17px; margin-bottom: 4px; }
        .a-kpi-value { font-size: 1.7rem; font-weight: 800; letter-spacing: -0.02em; color: ${C.ink}; font-feature-settings: "tnum" 1; }
        .a-kpi-label { font-size: 0.72rem; font-weight: 700; color: ${C.sub}; text-transform: uppercase; letter-spacing: 0.03em; }
        .a-kpi-sub { font-size: 0.76rem; color: ${C.faint}; margin-top: -2px; }

        .a-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 20px; margin-bottom: 20px; }
        .s-4 { grid-column: span 4; } .s-5 { grid-column: span 5; } .s-6 { grid-column: span 6; }
        .s-7 { grid-column: span 7; } .s-8 { grid-column: span 8; } .s-12 { grid-column: span 12; }
        @media (max-width: 1080px) { .a-grid .s-4, .a-grid .s-5, .a-grid .s-6, .a-grid .s-7, .a-grid .s-8 { grid-column: span 12; } }

        .a-chart-box { flex: 1; min-height: 280px; position: relative; width: 100%; margin-top: 10px; }

        .a-slider-row { margin-top: 14px; }
        .a-slider-row:first-child { margin-top: 4px; }
        .a-slider-head { display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 6px; }
        .a-slider-head span:first-child { color: ${C.sub}; font-weight: 500; }
        .a-slider-head span:last-child { color: ${C.ink}; font-weight: 700; font-feature-settings: "tnum" 1; }
        .a-slider { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 4px; background: #e5e5ea; }
        .a-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #ffffff; box-shadow: 0 1px 4px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06); cursor: pointer; border: 6px solid ${C.blue}; }
        .a-slider::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #ffffff; border: 6px solid ${C.blue}; cursor: pointer; }
        .a-slider:focus-visible { outline: 2px solid ${C.blue}; outline-offset: 3px; }
        .a-slider:focus-visible::-webkit-slider-thumb { box-shadow: 0 1px 4px rgba(0,0,0,0.25), 0 0 0 4px ${hex2rgba(C.blue, 0.25)}; }

        .a-dial-wrap { flex: 1; display: flex; align-items: center; justify-content: center; margin-top: 18px; }
        .a-dial { width: 178px; height: 178px; border-radius: 50%; display: flex; flex-direction: column; justify-content: center; align-items: center;
          background: radial-gradient(circle at 30% 25%, #ffffff, #f0f4ff 70%); box-shadow: inset 0 0 0 10px #eef1fb, 0 10px 30px -8px rgba(0,113,227,0.35); }
        .a-dial-label { font-size: 0.68rem; letter-spacing: 0.05em; color: ${C.sub}; font-weight: 700; text-transform: uppercase; }
        .a-dial-value { font-size: 2.7rem; font-weight: 800; color: ${C.blue}; line-height: 1.1; font-feature-settings: "tnum" 1; }
        .a-dial-delta { font-size: 0.78rem; font-weight: 700; margin-top: 6px; }

        .a-cmp-label { font-size: 0.8rem; color: ${C.sub}; font-weight: 600; }
        .a-cmp-value { font-size: 1rem; font-weight: 800; font-feature-settings: "tnum" 1; }
        .a-cmp-track { height: 10px; border-radius: 6px; background: #eef0f2; overflow: hidden; }
        .a-cmp-fill { height: 100%; border-radius: 6px; transition: width .6s ease; }

        .a-heat-table { width: 100%; border-collapse: separate; border-spacing: 4px; font-size: 0.82rem; text-align: center; }
        .a-heat-table th { color: ${C.sub}; font-weight: 700; font-size: 0.72rem; padding-bottom: 6px; }
        .a-heat-table td { padding: 10px 4px; border-radius: 10px; font-weight: 700; font-feature-settings: "tnum" 1; }
        .a-heat-table td:first-child { background: transparent !important; color: ${C.ink} !important; font-weight: 800; }

        .a-theme-row { display: flex; flex-direction: column; gap: 16px; margin-top: 6px; }
        .a-theme-head { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .a-theme-name { font-weight: 700; font-size: 0.88rem; color: ${C.ink}; }
        .a-theme-pct { font-weight: 800; font-size: 0.88rem; font-feature-settings: "tnum" 1; }
        .a-theme-quote { font-size: 0.78rem; color: ${C.faint}; margin: 6px 0 0; font-style: italic; line-height: 1.5; }

        .a-photo { padding: 0; position: relative; overflow: hidden; min-height: 300px; }
        .a-photo img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; z-index: 1; }
        .a-photo-overlay { position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: 26px; background: linear-gradient(to top, rgba(10,10,12,0.94) 0%, rgba(10,10,12,0.6) 65%, transparent 100%); }
        .a-photo-title { margin: 2px 0 8px; font-size: 1.2rem; font-weight: 800; color: #ffffff; letter-spacing: -0.01em; }
        .a-photo-text { margin: 0; font-size: 0.86rem; color: rgba(255,255,255,0.88); line-height: 1.55; }

        .a-carousel-card { padding: 26px; }
        .a-carousel { position: relative; }
        .a-carousel-viewport { position: relative; width: 100%; height: 460px; border-radius: 18px; overflow: hidden; background: #0b0b0c; }
        @media (max-width: 720px) {
          .a-carousel-viewport { height: 360px; }
          .a-carousel-slide .a-photo-overlay { padding: 20px 20px 24px; }
        }
        .a-carousel-track { display: flex; height: 100%; width: 100%; transition: transform .55s cubic-bezier(.4,0,.2,1); }
        @media (prefers-reduced-motion: reduce) { .a-carousel-track { transition: none; } }
        .a-carousel-slide { position: relative; flex: 0 0 100%; height: 100%; }
        .a-carousel-slide img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .a-carousel-slide .a-photo-overlay { padding: 30px 34px; }

        /* Controls cluster in the top-right corner — kept clear of the bottom-anchored
           caption overlay regardless of how long any individual slide's caption is. */
        .a-carousel-controls { position: absolute; top: 14px; right: 14px; display: flex; gap: 8px; z-index: 3; }
        .a-carousel-arrow, .a-carousel-playpause { width: 36px; height: 36px; border-radius: 50%; border: none;
          background: rgba(0,0,0,0.45); color: #ffffff; font-size: 13px; display: flex; align-items: center; justify-content: center;
          cursor: pointer; backdrop-filter: blur(6px); box-shadow: 0 4px 14px rgba(0,0,0,0.22); transition: background .2s ease, transform .2s ease; }
        .a-carousel-arrow:hover, .a-carousel-playpause:hover { background: rgba(0,0,0,0.68); transform: scale(1.06); }
        .a-carousel-arrow:focus-visible, .a-carousel-playpause:focus-visible { outline: 2px solid #ffffff; outline-offset: 2px; }

        .a-carousel-dots { display: flex; justify-content: center; gap: 2px; margin-top: 14px; }
        .a-carousel-dot { width: 26px; height: 26px; border-radius: 50%; border: none; background: transparent; cursor: pointer; padding: 0;
          display: flex; align-items: center; justify-content: center; }
        .a-carousel-dot::after { content: ''; width: 8px; height: 8px; border-radius: 50%; background: #d2d2d7; transition: background .2s ease, transform .2s ease; }
        .a-carousel-dot.active::after { background: ${C.blue}; transform: scale(1.35); }
        .a-carousel-dot:focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; }

        .a-section-gap { height: 6px; }
        .a-bignum-row { display: flex; align-items: baseline; gap: 10px; margin-top: 4px; }
        .a-bignum { font-size: 2.2rem; font-weight: 800; letter-spacing: -0.02em; font-feature-settings: "tnum" 1; }
        .a-bignum-unit { font-size: 0.95rem; font-weight: 700; color: ${C.sub}; }

        .a-loading { padding: 40px; text-align: center; color: ${C.faint}; font-size: 0.9rem; }
        .a-illustrative-badge { display: inline-block; font-size: 0.62rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.03em; color: ${C.orange}; background: ${hex2rgba(C.orange, 0.12)}; padding: 3px 8px; border-radius: 6px; margin-left: 8px; vertical-align: middle; }

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

      <PageControls onBack={goBack} canGoBack={canGoBack} exportLabel="Export Volume Data (CSV)" onExport={exportVolumeTable} />

      <div className="apple-dash-inner">

        {/* HERO */}
        <div className="a-hero">
          <p className="a-hero-eyebrow">Advanced Traffic Diagnostics</p>
          <h1 className="a-hero-title">Microscopic Traffic Diagnostics</h1>
          <p className="a-hero-sub">A live, data-grounded view of how tricycles reshape capacity, delay, and safety across five Kampala study intersections.</p>
        </div>

        {!stats ? (
          <div className="a-loading"><i className="fa-solid fa-circle-notch fa-spin" style={{ marginRight: '8px' }}></i>Computing live figures from field data…</div>
        ) : (
        <>
        {/* KPI STRIP */}
        <div className="a-kpi-grid">
          <KpiCard icon="fa-car-side" color={C.blue} label="Total Vehicles Recorded" value={stats.totalVehiclesRecorded.toLocaleString()} sub="Sum of all vehicle classes, 20-day sample" />
          <KpiCard icon="fa-database" color={C.indigo} label="Sample Size" value={stats.sampleSizeIntervals.toLocaleString()} sub="15-min intervals, 20-day field study" />
          <KpiCard icon="fa-gauge-high" color={C.orange} label="Peak vs Off-Peak Ratio" value={`${stats.peakOffpeakTest.ratio.toFixed(2)}×`} sub={`${Math.round(stats.peakOffpeakTest.meanA)} vs ${Math.round(stats.peakOffpeakTest.meanB)} veh/15-min`} />
          <KpiCard icon="fa-cloud-showers-heavy" color={C.red} label="Wet-Weather Volume Impact" value={`${stats.weatherTest.pctChange.toFixed(1)}%`} sub={pFmt(stats.weatherTest.p)} />
          <KpiCard icon="fa-route" color={C.teal} label="Network Tricycle Share" value={`${stats.overallCompositionPct.Tricycles.toFixed(1)}%`} sub="Of all recorded volume" />
          <KpiCard icon="fa-sack-dollar" color={C.purple} label="Economic Delay Cost" value="$1.5M" sub="External estimate (cited), Greater Kampala" />
          <KpiCard icon="fa-chart-line" color={C.green} label="Tricycles ↔ V/C Correlation" value={`r = ${stats.volumeVcCorrelation.r.toFixed(2)}`} sub={`${stats.volumeVcCorrelation.r2Pct.toFixed(0)}% of variance · 7-day baseline`} />
        </div>

        {/* ROW: Fleet composition + Interactive simulator + Delay by profile */}
        <div className="a-grid">
          <div className="a-card s-4">
            <SectionHeader eyebrow="Fleet Composition" title="Vehicle-Class Share" color={C.blue} />
            <div className="a-chart-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Doughnut
                data={{
                  labels: ['Boda Bodas (Motorcycle Taxis)', 'Tricycles', 'Passenger Cars', 'Matatus (14-Seater)', 'Heavy Trucks'],
                  datasets: [{
                    data: [
                      stats.overallCompositionPct.Boda_bodas, stats.overallCompositionPct.Tricycles,
                      stats.overallCompositionPct.Cars, stats.overallCompositionPct.Minibuses, stats.overallCompositionPct.Heavy_Trucks,
                    ],
                    backgroundColor: [C.indigo, C.green, C.blue, C.teal, C.red],
                    borderColor: '#ffffff', borderWidth: 3, hoverOffset: 8,
                  }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false, cutout: '64%',
                  plugins: { legend: { position: 'bottom', labels: legendTheme.labels }, tooltip: { ...tooltipTheme, callbacks: { label: (ctx) => ctx.label + ': ' + ctx.parsed.toFixed(1) + '%' } } }
                }}
              />
            </div>
            <p className="a-footnote" style={{ textAlign: 'center', marginTop: '10px' }}>Share of all {stats.sampleSizeIntervals.toLocaleString()} recorded 15-minute intervals across the five study intersections.</p>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Interactive Simulator" title={<>Illustrative Capacity Model<span className="a-illustrative-badge">Model, not measured</span></>} color={C.purple} />
            <div className="a-slider-row">
              <div className="a-slider-head"><span>Volume/Capacity (V/C)</span><span>{vcRatio.toFixed(2)}</span></div>
              <input type="range" min="0.2" max="1.5" step="0.05" value={vcRatio} onChange={(e) => setVcRatio(parseFloat(e.target.value))} className="a-slider" aria-label="Volume/Capacity (V/C)" />
            </div>
            <div className="a-slider-row">
              <div className="a-slider-head"><span>Tricycle Modal Share (%)</span><span>{modalShare}%</span></div>
              <input type="range" min="2" max="30" step="1" value={modalShare} onChange={(e) => setModalShare(parseInt(e.target.value))} className="a-slider" aria-label="Tricycle Modal Share (%)" />
            </div>
            <div className="a-slider-row">
              <div className="a-slider-head"><span>Effective Road Width (m)</span><span>{roadWidth.toFixed(1)}m</span></div>
              <input type="range" min="6.0" max="9.0" step="0.1" value={roadWidth} onChange={(e) => setRoadWidth(parseFloat(e.target.value))} className="a-slider" aria-label="Effective Road Width (m)" />
            </div>
            <div className="a-dial-wrap">
              <div className="a-dial">
                <span className="a-dial-label">Modeled PCU</span>
                <span className="a-dial-value">{dynamicPcu}</span>
                <span className="a-dial-delta" style={{ color: capacityDrop > 0 ? C.red : C.green }}><i className={`fa-solid fa-arrow-${capacityDrop > 0 ? 'up' : 'down'}`}></i> {Math.abs(capacityDrop)}% vs field PCU baseline</span>
              </div>
            </div>
            <p className="a-footnote">Base PCU {basePcu.toFixed(2)} is the real, dynamically-computed headway-ratio value (Overview tab); the V/C, modal-share and road-width penalties applied on top are an illustrative sensitivity model, not separately field-measured.</p>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Simulation Model" title="Delay by PCU Profile" color={C.orange} sub="Theoretical curves, not field-measured delay" />
            <div className="a-chart-box">
              <Line
                data={{
                  labels: ['0.6', '0.7', '0.8', '0.9', '1.0', '1.1', '1.2', '1.3'],
                  datasets: [
                    { label: 'Baseline (PCU 1.0)', data: [46, 62, 97, 373, 1994, 1948, 2011, 2150], borderColor: '#c7c7cc', backgroundColor: 'transparent', borderWidth: 2, tension: 0.4 },
                    { label: `Field PCU (${stats.pcuHeadwayOverall.toFixed(2)})`, data: [51, 76, 176, 1803, 2075, 1901, 2180, 2405], borderColor: C.blue, backgroundColor: hex2rgba(C.blue, 0.12), borderWidth: 3, fill: true, tension: 0.4 },
                    { label: 'Severe Weather (1.5)', data: [54, 84, 279, 2228, 2623, 1915, 2300, 2650], borderColor: C.red, backgroundColor: 'transparent', borderWidth: 2, borderDash: [5, 5], tension: 0.4 }
                  ]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: {
                    y: { title: { display: true, text: 'Delay (s/veh)', color: chartSub, font: { size: 10.5 } }, grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10 } } },
                    x: { title: { display: true, text: 'V/C Ratio', color: chartSub, font: { size: 10.5 } }, grid: { display: false }, ticks: { color: chartSub, font: { size: 10 } } }
                  },
                  plugins: { legend: { labels: { ...legendTheme.labels, boxWidth: 8, font: { size: 9.5 } } }, tooltip: tooltipTheme }
                }}
              />
            </div>
          </div>
        </div>

        {/* ROW: Static PCU by intersection + Behavioral themes */}
        <div className="a-grid">
          <div className="a-card s-7">
            <SectionHeader eyebrow="Field Results · headway-ratio method" title="PCU by Intersection" color={C.indigo} sub="PCU = mean tricycle headway ÷ mean car headway, per intersection." />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: Object.keys(stats.pcuByIntersection).map(stats.shortName),
                  datasets: [
                    { label: 'Tricycle PCU (headway-ratio)', data: Object.values(stats.pcuByIntersection).map(v => Number(v.pcuHeadway.toFixed(3))), backgroundColor: C.indigo, borderRadius: 6 },
                  ]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { y: { min: 1.2, max: 1.4, grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } }, x: { grid: { display: false }, ticks: { color: chartSub, font: { size: 10.5 } } } },
                  plugins: { legend: { labels: legendTheme.labels }, tooltip: tooltipTheme }
                }}
              />
            </div>
            <p className="a-footnote">All five sites cluster tightly around PCU {stats.pcuHeadwayOverall.toFixed(2)} — a tricycle consistently occupies about 1.3× the road time-space of a passenger car, with little site-to-site variation in this dataset.</p>
          </div>

          <div className="a-card s-5">
            <SectionHeader eyebrow="Section 4.7 · Thematic Interviews (n = 50)" title="Driver-Reported Behavior" color={C.pink} />
            <div className="a-theme-row">
              <div>
                <div className="a-theme-head"><span className="a-theme-name">Pothole Swerving</span><span className="a-theme-pct" style={{ color: C.red }}>92%</span></div>
                <div className="a-cmp-track"><div className="a-cmp-fill" style={{ width: '92%', background: C.red }}></div></div>
                <p className="a-theme-quote">"If I hit the trench at Bwaise, the cargo flips. I must swerve into the fast lane, even if a car is there."</p>
              </div>
              <div>
                <div className="a-theme-head"><span className="a-theme-name">Police Harassment & Junction Avoidance</span><span className="a-theme-pct" style={{ color: C.orange }}>78%</span></div>
                <div className="a-cmp-track"><div className="a-cmp-fill" style={{ width: '78%', background: C.orange }}></div></div>
              </div>
              <div>
                <div className="a-theme-head"><span className="a-theme-name">Fatigue-Induced Lane Straddling</span><span className="a-theme-pct" style={{ color: C.yellow }}>65%</span></div>
                <div className="a-cmp-track"><div className="a-cmp-fill" style={{ width: '65%', background: '#d9a800' }}></div></div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW: Peak/Off-peak, Day/Night, Tricycle-share comparison */}
        <div className="a-grid">
          <div className="a-card s-4">
            <SectionHeader eyebrow="Welch's t-test · 20-day field dataset" title="Peak vs. Off-Peak" color={C.blue} />
            <CompareStat color={C.blue} leftLabel="Peak (07-09h, 16-19h)" leftValue={stats.peakOffpeakTest.meanA.toFixed(1)} rightLabel="Off-peak" rightValue={stats.peakOffpeakTest.meanB.toFixed(1)} footnote={`Veh / 15-min interval · t = ${stats.peakOffpeakTest.t.toFixed(2)}, ${pFmt(stats.peakOffpeakTest.p)}, n = ${stats.peakOffpeakTest.nA.toLocaleString()}/${stats.peakOffpeakTest.nB.toLocaleString()}`} />
          </div>
          <div className="a-card s-4">
            <SectionHeader eyebrow="Welch's t-test · 7-day baseline dataset" title="Day vs. Night Tricycle Volume" color={C.indigo} />
            <CompareStat color={C.indigo} leftLabel="Daytime (07:00–19:00)" leftValue={stats.dayNightTest.meanA.toFixed(2)} rightLabel="Overnight (19:00–07:00)" rightValue={stats.dayNightTest.meanB.toFixed(2)} footnote={`Veh / 15-min interval · t = ${stats.dayNightTest.t.toFixed(2)}, ${pFmt(stats.dayNightTest.p)}, n = ${stats.dayNightTest.nA}/${stats.dayNightTest.nB}`} />
          </div>
          <div className="a-card s-4">
            <SectionHeader eyebrow="20-day field dataset" title="Tricycle Share: Highest vs. Lowest Site" color={C.green} />
            <CompareStat
              color={C.green}
              leftLabel={stats.shortName(stats.highestTricycleShareIntersection)}
              leftValue={stats.byIntersection[stats.highestTricycleShareIntersection].tricycleSharePct.toFixed(1)}
              rightLabel={stats.shortName(Object.entries(stats.byIntersection).sort((a,b)=>a[1].tricycleSharePct-b[1].tricycleSharePct)[0][0])}
              rightValue={Object.entries(stats.byIntersection).sort((a,b)=>a[1].tricycleSharePct-b[1].tricycleSharePct)[0][1].tricycleSharePct.toFixed(1)}
              footnote="% of site volume that is tricycles"
            />
          </div>
        </div>

        <div className="a-grid">
          <div className="a-card s-4">
            <SectionHeader eyebrow="Paired t-test · 7-day baseline dataset" title="Tricycle vs. Car Headway" color={C.purple} />
            <div className="a-bignum-row"><span className="a-bignum" style={{ color: C.purple }}>{stats.headwayTest.meanA.toFixed(2)}</span><span className="a-bignum-unit">s (tricycle)</span></div>
            <div className="a-bignum-row"><span className="a-bignum" style={{ color: '#c7c7cc', fontSize: '1.4rem' }}>{stats.headwayTest.meanB.toFixed(2)}</span><span className="a-bignum-unit">s (passenger car)</span></div>
            <p className="a-footnote" style={{ marginTop: '8px' }}>t = {stats.headwayTest.t.toFixed(2)}, {pFmt(stats.headwayTest.p)}, n = {stats.headwayTest.n.toLocaleString()} — a physically smaller vehicle occupying more time-space, consistent with the "blocking friction" theme.</p>
          </div>
          <div className="a-card s-4">
            <SectionHeader eyebrow="7-day baseline dataset" title="V/C Ratio, Observed Range" color={C.teal} />
            <div className="a-bignum-row"><span className="a-bignum" style={{ color: C.teal }}>{stats.vcStats.mean.toFixed(2)}</span><span className="a-bignum-unit">mean V/C</span></div>
            <p className="a-sub">Range {stats.vcStats.min.toFixed(2)}–{stats.vcStats.max.toFixed(2)} across {stats.vcStats.n.toLocaleString()} recorded intervals, all five sites.</p>
          </div>
          <div className="a-card s-4">
            <SectionHeader eyebrow="Poisson dispersion · 7-day baseline dataset" title="Arrival Platooning" color={C.red} />
            <div className="a-bignum-row"><span className="a-bignum" style={{ color: C.red }}>{stats.poissonNetwork.vmr.toFixed(2)}×</span></div>
            <p className="a-sub">Variance-to-mean ratio of tricycle arrivals, network-wide (χ² = {stats.poissonNetwork.chi2.toFixed(0)}, {pFmt(stats.poissonNetwork.p)}, n = {stats.poissonNetwork.n.toLocaleString()}) — tricycles arrive in bunched platoons, not the random Poisson stream classical capacity models assume. Range across sites: {Math.min(...Object.values(stats.poissonByIntersection).map(v=>v.vmr)).toFixed(1)}×–{Math.max(...Object.values(stats.poissonByIntersection).map(v=>v.vmr)).toFixed(1)}×.</p>
          </div>
        </div>

        {/* ROW: Safety + Descriptive stats by intersection */}
        <div className="a-grid">
          <div className="a-card s-6">
            <SectionHeader eyebrow={`Safety Analysis (N = ${stats.incidentN} incidents)`} title="Incident Severity by Type" color={C.red} />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: incidentTypes,
                  datasets: [
                    { label: 'Fatal', data: incidentTypes.map(t => stats.incidentSeverityByType[t]?.Fatal || 0), backgroundColor: C.red },
                    { label: 'Serious', data: incidentTypes.map(t => stats.incidentSeverityByType[t]?.Serious || 0), backgroundColor: C.orange },
                    { label: 'Minor', data: incidentTypes.map(t => stats.incidentSeverityByType[t]?.Minor || 0), backgroundColor: C.green }
                  ]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { x: { stacked: true, grid: { display: false }, ticks: { color: chartSub, font: { size: 9 } } }, y: { stacked: true, grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } } },
                  plugins: { legend: { labels: legendTheme.labels }, tooltip: tooltipTheme }
                }}
              />
            </div>
          </div>

          <div className="a-card s-6">
            <SectionHeader eyebrow="One-way ANOVA · 20-day field dataset" title="Tricycle Volume by Intersection" color={C.blue} sub={`Mean vehicles / 15-min interval (n = ${Object.values(stats.tricycleByIntersection)[0].n.toLocaleString()} per site)`} />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: Object.keys(stats.tricycleByIntersection).map(stats.shortName),
                  datasets: [{ label: 'Mean volume', data: Object.values(stats.tricycleByIntersection).map(v => Number(v.mean.toFixed(2))), backgroundColor: [C.teal, C.blue2, C.blue, C.indigo, C.purple], borderRadius: 8 }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { y: { grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } }, x: { grid: { display: false }, ticks: { color: chartSub, font: { size: 10.5 } } } },
                  plugins: {
                    legend: { display: false },
                    tooltip: { ...tooltipTheme, callbacks: { afterLabel: (ctx) => `σ = ${Object.values(stats.tricycleByIntersection)[ctx.dataIndex].std.toFixed(2)}` } }
                  }
                }}
              />
            </div>
            <p className="a-footnote">One-way ANOVA across sites: F({stats.tricycleAnova.df1}, {stats.tricycleAnova.df2.toLocaleString()}) = {stats.tricycleAnova.F.toFixed(1)}, {pFmt(stats.tricycleAnova.p)} — tricycle volume differs significantly by intersection.</p>
          </div>
        </div>

        {/* ROW: Sensitivity heatmap + Greenshields + Shockwave */}
        <div className="a-grid">
          <div className="a-card s-4">
            <SectionHeader eyebrow="Predictive Matrix · illustrative model" title="PCU Sensitivity" color={C.indigo} sub="Modal share vs. V/C ratio, anchored to the real field PCU baseline" />
            <div className="a-chart-box" style={{ minHeight: '240px', overflowX: 'auto' }}>
              <table className="a-heat-table">
                <thead><tr><th>V/C</th>{modalShares.map(ms => <th key={ms}>{ms * 100}%</th>)}</tr></thead>
                <tbody>
                  {vcRatios.map(vc => (
                    <tr key={vc}>
                      <td>{vc}</td>
                      {modalShares.map(ms => {
                        const pcu = (stats.pcuHeadwayOverall + (vc * 0.3) + (ms * 0.8)).toFixed(2);
                        const opacity = (pcu - stats.pcuHeadwayOverall) / 1.0;
                        return <td key={ms} style={{ background: hex2rgba(C.indigo, Math.max(0.08, opacity)), color: opacity > 0.5 ? '#fff' : C.ink }}>{pcu}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Macroscopic Flow Theory · textbook model" title="Greenshields Diagram" color={C.orange} />
            <div className="a-chart-box">
              <Line
                data={{
                  labels: [0, 14, 27, 41, 55, 68, 82, 96, 109, 123],
                  datasets: [
                    { label: 'Standard traffic', data: [0, 727, 1267, 1620, 1786, 1764, 1555, 1159, 576, 0], borderColor: '#c7c7cc', backgroundColor: 'transparent', borderWidth: 2, tension: 0.4 },
                    { label: '20% tricycles', data: [0, 527, 876, 1049, 1043, 861, 501, 0, 0, 0], borderColor: C.orange, backgroundColor: hex2rgba(C.orange, 0.14), borderWidth: 3, fill: true, tension: 0.4 }
                  ]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: {
                    x: { title: { display: true, text: 'Density (veh/km)', color: chartSub, font: { size: 10 } }, grid: { display: false }, ticks: { color: chartSub, font: { size: 9.5 } } },
                    y: { title: { display: true, text: 'Flow (veh/hr)', color: chartSub, font: { size: 10 } }, grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 9.5 } } }
                  },
                  plugins: { legend: { labels: { ...legendTheme.labels, font: { size: 9.5 } } }, tooltip: tooltipTheme }
                }}
              />
            </div>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Kinematic Wave Theory (LWR) · textbook model" title="Backward Shockwave" color={C.pink} />
            <div className="a-chart-box">
              <Line
                data={{
                  labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
                  datasets: [{ label: 'Queue length (m)', data: [0, 51, 102, 153, 205, 256, 307], borderColor: C.pink, backgroundColor: hex2rgba(C.pink, 0.14), borderWidth: 3, fill: true, tension: 0.1 }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: {
                    x: { title: { display: true, text: 'Seconds since stop', color: chartSub, font: { size: 10 } }, grid: { display: false }, ticks: { color: chartSub, font: { size: 9.5 } } },
                    y: { title: { display: true, text: 'Queue length (m)', color: chartSub, font: { size: 10 } }, grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 9.5 } } }
                  },
                  plugins: { legend: { display: false }, tooltip: tooltipTheme }
                }}
              />
            </div>
          </div>
        </div>

        {/* METHODOLOGY */}
        <div className="a-grid">
          <MethodologyPanel color={C.indigo} keys={['totalVehiclesRecorded', 'compositionPct', 'peakOffpeakTest', 'weatherTest', 'pcuHeadway', 'dayNightTest', 'headwayTest', 'vcStats', 'volumeVcCorrelation', 'poissonDispersion', 'tricycleAnova', 'incidentSeverity']} />
        </div>

        {/* PHOTO CAROUSEL */}
        <div className="a-card a-carousel-card s-12">
          <SectionHeader eyebrow="Field Evidence" title="Traffic & Site Data Collection" color={C.teal}
            sub="Photographic reference material from the study corridors, illustrating the behaviors and conditions discussed above." />
          <PhotoCarousel photos={[
            { src: `${baseUrl}assets/weaving.jpg`, eyebrow: 'The Weaving Effect', title: 'Space Thieves', color: C.blue2,
              text: 'Tricycles rarely wait in line, wedging into the tight gaps between cars and taking up the safety buffer (headway) that following vehicles depend on — forcing abrupt braking and disrupting the whole road.' },
            { src: `${baseUrl}assets/shockwave.jpg`, eyebrow: 'The Ripple Effect', title: 'Stop-and-Go Chaos', color: C.green,
              text: 'A single tricycle stopping to drop off a passenger can block a lane for roughly 10 seconds — enough to trigger a backward shockwave that piles up traffic for a kilometer.' },
            { src: `${baseUrl}assets/accident.jpg`, eyebrow: 'Safety Reality', title: 'The Friction Tax', color: C.orange,
              text: 'Tricycles often operate in the blind spots of sedans on narrow lanes. Minor side-swipes are common and can trigger sudden gridlock with little warning.' },
            { src: `${baseUrl}assets/commute.jpg`, eyebrow: 'Origin-Destination Flow', title: 'The Commuter Arteries', color: C.blue2,
              text: 'Tricycles act as last-mile suburban feeders but add real friction to primary arteries at peak hours.' },
            { src: `${baseUrl}assets/chokepoint.jpg`, eyebrow: 'Structural Geometry', title: 'Physical Constraints', color: C.red,
              text: 'Geospatial road-network mapping shows many Kampala routes are physically too narrow for safe mixed flow, making safe overtaking geometrically impossible in several corridors.' },
          ]} />
        </div>
        </>
        )}

      </div>
    </div>
  );
};

export default InfographicDashboard;
