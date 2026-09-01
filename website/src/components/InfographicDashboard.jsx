import React, { useState } from 'react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Filler, Tooltip, Legend
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

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

const PhotoCard = ({ src, eyebrow, title, color, text, span }) => (
  <div className={`a-card a-photo ${span}`}>
    <img src={src} alt={title} />
    <div className="a-photo-overlay">
      <p className="a-eyebrow" style={{ color }}>{eyebrow}</p>
      <h3 className="a-photo-title">{title}</h3>
      <p className="a-photo-text">{text}</p>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
const InfographicDashboard = () => {
  const [vcRatio, setVcRatio] = useState(0.85);
  const [modalShare, setModalShare] = useState(15);
  const [roadWidth, setRoadWidth] = useState(7.0);

  // Site is served from the /tricycles/ subpath on GitHub Pages, so plain
  // "/assets/..." src strings 404 in production even though they work under
  // `vite dev` — every asset reference below is prefixed with the real base.
  const baseUrl = import.meta.env.BASE_URL || '/';

  const basePcu = 1.35;
  const vcPenalty = (vcRatio - 0.5) > 0 ? (vcRatio - 0.5) * 0.8 : 0;
  const modalPenalty = (modalShare - 5) * 0.02;
  const widthBonus = (roadWidth - 7.0) * -0.05;
  const dynamicPcu = (basePcu + vcPenalty + modalPenalty + widthBonus).toFixed(2);
  const capacityDrop = Math.round((dynamicPcu - 1.0) * 100);

  const vcRatios = [0.2, 0.4, 0.6, 0.8, 1.0];
  const modalShares = [0.05, 0.10, 0.15, 0.20, 0.25];

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
        .a-slider { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 4px; background: #e5e5ea; outline: none; }
        .a-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #ffffff; box-shadow: 0 1px 4px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06); cursor: pointer; border: 6px solid ${C.blue}; }
        .a-slider::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #ffffff; border: 6px solid ${C.blue}; cursor: pointer; }

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

        .a-section-gap { height: 6px; }
        .a-bignum-row { display: flex; align-items: baseline; gap: 10px; margin-top: 4px; }
        .a-bignum { font-size: 2.2rem; font-weight: 800; letter-spacing: -0.02em; font-feature-settings: "tnum" 1; }
        .a-bignum-unit { font-size: 0.95rem; font-weight: 700; color: ${C.sub}; }
      `}</style>

      <div className="apple-dash-inner">

        {/* HERO */}
        <div className="a-hero">
          <p className="a-hero-eyebrow">Advanced Traffic Diagnostics</p>
          <h1 className="a-hero-title">Microscopic Traffic Diagnostics</h1>
          <p className="a-hero-sub">A live, data-grounded view of how tricycles reshape capacity, delay, and safety across five Kampala study intersections.</p>
        </div>

        {/* KPI STRIP */}
        <div className="a-kpi-grid">
          <KpiCard icon="fa-gauge-high" color={C.red} label="Network Flow State" value="Saturated" sub="Level of Service (LOS) E" />
          <KpiCard icon="fa-car-side" color={C.blue} label="Recorded Vehicles" value="6,400" sub="15-min interval count, full study" />
          <KpiCard icon="fa-hourglass-half" color={C.orange} label="Mean Network Delay" value="142.5s" sub="Per intersection" />
          <KpiCard icon="fa-triangle-exclamation" color={vcRatio > 0.9 ? C.red : C.indigo} label="Critical V/C Ratio" value={vcRatio.toFixed(2)} sub="Wandegeya site" />
          <KpiCard icon="fa-route" color={C.teal} label="Tricycle Share" value={`${modalShare}%`} sub="System average" />
          <KpiCard icon="fa-sack-dollar" color={C.purple} label="Economic Delay Cost" value="$1.5M" sub="Daily est., Greater Kampala" />
          <KpiCard icon="fa-smog" color={C.pink} label="Excess CO2" value="+12.4%" sub="Attributed to weaving" />
          <KpiCard icon="fa-chart-line" color={C.green} label="Volume ↔ V/C Correlation" value="r = 0.68" sub="47% of variance explained" />
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
                    data: [51.96, 12.77, 24.39, 9.71, 1.18],
                    backgroundColor: [C.indigo, C.green, C.blue, C.teal, C.red],
                    borderColor: '#ffffff', borderWidth: 3, hoverOffset: 8,
                  }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false, cutout: '64%',
                  plugins: { legend: { position: 'bottom', labels: legendTheme.labels }, tooltip: { ...tooltipTheme, callbacks: { label: (ctx) => ctx.label + ': ' + ctx.parsed + '%' } } }
                }}
              />
            </div>
            <p className="a-footnote" style={{ textAlign: 'center', marginTop: '10px' }}>Share of all 6,400 recorded 15-minute intervals across the five study intersections.</p>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Interactive Simulator" title="Dynamic PCU Calculator" color={C.purple} />
            <div className="a-slider-row">
              <div className="a-slider-head"><span>Volume/Capacity (V/C)</span><span>{vcRatio.toFixed(2)}</span></div>
              <input type="range" min="0.2" max="1.5" step="0.05" value={vcRatio} onChange={(e) => setVcRatio(parseFloat(e.target.value))} className="a-slider" />
            </div>
            <div className="a-slider-row">
              <div className="a-slider-head"><span>Tricycle Modal Share (%)</span><span>{modalShare}%</span></div>
              <input type="range" min="2" max="30" step="1" value={modalShare} onChange={(e) => setModalShare(parseInt(e.target.value))} className="a-slider" />
            </div>
            <div className="a-slider-row">
              <div className="a-slider-head"><span>Effective Road Width (m)</span><span>{roadWidth.toFixed(1)}m</span></div>
              <input type="range" min="6.0" max="9.0" step="0.1" value={roadWidth} onChange={(e) => setRoadWidth(parseFloat(e.target.value))} className="a-slider" />
            </div>
            <div className="a-dial-wrap">
              <div className="a-dial">
                <span className="a-dial-label">Computed PCU</span>
                <span className="a-dial-value">{dynamicPcu}</span>
                <span className="a-dial-delta" style={{ color: C.red }}><i className="fa-solid fa-arrow-up"></i> {capacityDrop}% capacity impact</span>
              </div>
            </div>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Simulation Model" title="Delay by PCU Profile" color={C.orange} />
            <div className="a-chart-box">
              <Line
                data={{
                  labels: ['0.6', '0.7', '0.8', '0.9', '1.0', '1.1', '1.2', '1.3'],
                  datasets: [
                    { label: 'Baseline (PCU 1.0)', data: [46, 62, 97, 373, 1994, 1948, 2011, 2150], borderColor: '#c7c7cc', backgroundColor: 'transparent', borderWidth: 2, tension: 0.4 },
                    { label: 'Empirical Tricycle (1.35)', data: [51, 76, 176, 1803, 2075, 1901, 2180, 2405], borderColor: C.blue, backgroundColor: hex2rgba(C.blue, 0.12), borderWidth: 3, fill: true, tension: 0.4 },
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
            <SectionHeader eyebrow="Table 4.1 · Field Results" title="Static PCU by Intersection" color={C.indigo} sub="Baseline PCU by estimation method, compared against boda-boda PCU at the same five sites." />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: ['Wandegeya', 'Kibuye Roundabout', 'Bakuli', 'Bwaise', 'Natete (Cargo)'],
                  datasets: [
                    { label: 'Tricycle PCU (Headway)', data: [0.82, 0.91, 0.84, 0.96, 0.94], backgroundColor: C.indigo, borderRadius: 6 },
                    { label: 'Tricycle PCU (MLR)', data: [0.85, 0.94, 0.87, 1.02, 0.98], backgroundColor: C.blue2, borderRadius: 6 },
                    { label: 'Boda-boda PCU', data: [0.45, 0.52, 0.48, 0.55, 0.50], backgroundColor: '#d2d2d7', borderRadius: 6 },
                  ]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { y: { grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } }, x: { grid: { display: false }, ticks: { color: chartSub, font: { size: 10.5 } } } },
                  plugins: { legend: { labels: legendTheme.labels }, tooltip: tooltipTheme }
                }}
              />
            </div>
            <p className="a-footnote">At Bwaise and Kibuye, MLR-method PCU reaches or exceeds 1.0 — a single tricycle disrupts flow almost as much as a passenger car under severe mixed-traffic friction.</p>
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

        {/* ROW: Peak/Off-peak, Day/Night, Growth, VISSIM */}
        <div className="a-grid">
          <div className="a-card s-4">
            <SectionHeader eyebrow="Table 4.9.3 · t-Test" title="Peak vs. Off-Peak" color={C.blue} />
            <CompareStat color={C.blue} leftLabel="Peak (07-09h, 17-19h)" leftValue="26.13" rightLabel="Off-peak" rightValue="11.75" footnote="Veh / 15-min interval · t = 34.10, p < .001" />
          </div>
          <div className="a-card s-4">
            <SectionHeader eyebrow="Table 4.9.9 · t-Test" title="Day vs. Night Volume" color={C.indigo} />
            <CompareStat color={C.indigo} leftLabel="Daytime (07:00–19:00)" leftValue="16.54" rightLabel="Overnight (19:00–07:00)" rightValue="1.73" footnote="Veh / 15-min interval · t = 55.93, p < .001" />
          </div>
          <div className="a-card s-4">
            <SectionHeader eyebrow="Table 4.3 · MoWT 2021 vs. Field 2026" title="Longitudinal Growth" color={C.green} />
            <CompareStat color={C.green} leftLabel="Peak-hour volume, 2026" leftValue="700" rightLabel="MoWT baseline, 2021" rightValue="215" footnote="Veh/hr, Kibuye Roundabout · +225% growth; fleet share rose 4.2% → 14.8% (+252%)" />
          </div>
        </div>

        <div className="a-grid">
          <div className="a-card s-4">
            <SectionHeader eyebrow="Table 4.9.4 · Headway" title="Tricycle vs. Car Headway" color={C.purple} />
            <div className="a-bignum-row"><span className="a-bignum" style={{ color: C.purple }}>3.29</span><span className="a-bignum-unit">s (tricycle)</span></div>
            <div className="a-bignum-row"><span className="a-bignum" style={{ color: '#c7c7cc', fontSize: '1.4rem' }}>2.50</span><span className="a-bignum-unit">s (passenger car)</span></div>
            <p className="a-footnote" style={{ marginTop: '8px' }}>t = 50.00, p &lt; .001 — a physically smaller vehicle occupying more time-space, consistent with the "blocking friction" theme.</p>
          </div>
          <div className="a-card s-4">
            <SectionHeader eyebrow="Section 4.8 · VISSIM" title="Signal Re-Optimization" color={C.teal} />
            <div className="a-bignum-row"><span className="a-bignum" style={{ color: C.teal }}>+14.2%</span></div>
            <p className="a-sub">Saturation-flow improvement at Wandegeya Junction after re-timing signals around the empirical dynamic PCU curve (0.85–1.15), replacing VISSIM's default static value of ≈0.5.</p>
          </div>
          <div className="a-card s-4">
            <SectionHeader eyebrow="Section 4.9.6 · Poisson Goodness-of-Fit" title="Arrival Platooning" color={C.red} />
            <div className="a-bignum-row"><span className="a-bignum" style={{ color: C.red }}>6.39×</span></div>
            <p className="a-sub">Variance-to-mean ratio at Wandegeya Junction (χ² = 1,122.5, p &lt; .001) — tricycles arrive in bunched platoons, not the random Poisson stream classical capacity models assume.</p>
          </div>
        </div>

        {/* ROW: Safety + Descriptive stats by intersection */}
        <div className="a-grid">
          <div className="a-card s-6">
            <SectionHeader eyebrow="Safety Analysis (N = 840 incidents)" title="Incident Severity by Type" color={C.red} />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: ['Rollover', 'Pedestrian', 'Moto Crash', 'Rear-End', 'Single Veh', 'Side-swipe'],
                  datasets: [
                    { label: 'Fatal', data: [25, 45, 30, 15, 20, 12], backgroundColor: C.red },
                    { label: 'Serious', data: [40, 30, 35, 30, 25, 25], backgroundColor: C.orange },
                    { label: 'Minor', data: [40, 15, 23, 42, 40, 46], backgroundColor: C.green }
                  ]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { x: { stacked: true, grid: { display: false }, ticks: { color: chartSub, font: { size: 10.5 } } }, y: { stacked: true, grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } } },
                  plugins: { legend: { labels: legendTheme.labels }, tooltip: tooltipTheme }
                }}
              />
            </div>
          </div>

          <div className="a-card s-6">
            <SectionHeader eyebrow="Table 4.9.1 · Descriptive Statistics" title="Tricycle Volume by Intersection" color={C.blue} sub="Mean vehicles / 15-min interval, daytime (n = 336 per site)" />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: ['Bwaise', 'Bakuli', 'Wandegeya', 'Natete', 'Kibuye'],
                  datasets: [{ label: 'Mean volume', data: [14.50, 15.90, 16.67, 17.73, 17.92], backgroundColor: [C.teal, C.blue2, C.blue, C.indigo, C.purple], borderRadius: 8 }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { y: { grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } }, x: { grid: { display: false }, ticks: { color: chartSub, font: { size: 10.5 } } } },
                  plugins: { legend: { display: false }, tooltip: { ...tooltipTheme, callbacks: { afterLabel: (ctx) => `σ = ${[8.89, 9.59, 10.32, 11.17, 11.01][ctx.dataIndex]}` } } }
                }}
              />
            </div>
            <p className="a-footnote">One-way ANOVA across sites: F(4, 1675) = 6.33, p &lt; .001 — Kibuye and Natete draw significantly more tricycle traffic than Bwaise and Bakuli.</p>
          </div>
        </div>

        {/* ROW: Sensitivity heatmap + Greenshields + Shockwave */}
        <div className="a-grid">
          <div className="a-card s-4">
            <SectionHeader eyebrow="Predictive Matrix" title="PCU Sensitivity" color={C.indigo} sub="Modal share vs. V/C ratio" />
            <div className="a-chart-box" style={{ minHeight: '240px', overflowX: 'auto' }}>
              <table className="a-heat-table">
                <thead><tr><th>V/C</th>{modalShares.map(ms => <th key={ms}>{ms * 100}%</th>)}</tr></thead>
                <tbody>
                  {vcRatios.map(vc => (
                    <tr key={vc}>
                      <td>{vc}</td>
                      {modalShares.map(ms => {
                        const pcu = (1.1 + (vc * 0.4) + (ms * 1.2)).toFixed(2);
                        const opacity = (pcu - 1.1) / 1.0;
                        return <td key={ms} style={{ background: hex2rgba(C.indigo, Math.max(0.08, opacity)), color: opacity > 0.5 ? '#fff' : C.ink }}>{pcu}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="a-card s-4">
            <SectionHeader eyebrow="Macroscopic Flow Theory" title="Greenshields Diagram" color={C.orange} />
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
            <SectionHeader eyebrow="Kinematic Wave Theory (LWR)" title="Backward Shockwave" color={C.pink} />
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

        {/* PHOTO GRID */}
        <div className="a-grid">
          <PhotoCard span="s-8" src={`${baseUrl}assets/weaving.jpg`} eyebrow="The Weaving Effect" title="Space Thieves" color={C.blue2}
            text="Tricycles rarely wait in line, wedging into the tight gaps between cars and taking up the safety buffer (headway) that following vehicles depend on — forcing abrupt braking and disrupting the whole road." />
          <PhotoCard span="s-4" src={`${baseUrl}assets/shockwave.jpg`} eyebrow="The Ripple Effect" title="Stop-and-Go Chaos" color={C.green}
            text="A single tricycle stopping to drop off a passenger can block a lane for roughly 10 seconds — enough to trigger a backward shockwave that piles up traffic for a kilometer." />
          <PhotoCard span="s-4" src={`${baseUrl}assets/accident.jpg`} eyebrow="Safety Reality" title="The Friction Tax" color={C.orange}
            text="Tricycles often operate in the blind spots of sedans on narrow lanes. Minor side-swipes are common and can trigger sudden gridlock with little warning." />
          <PhotoCard span="s-4" src={`${baseUrl}assets/commute.jpg`} eyebrow="Origin-Destination Flow" title="The Commuter Arteries" color={C.blue2}
            text="Analysis of 1,446 origin-destination zones shows where traffic pulses concentrate. Tricycles act as last-mile suburban feeders but add real friction to primary arteries at peak hours." />
          <PhotoCard span="s-4" src={`${baseUrl}assets/chokepoint.jpg`} eyebrow="Structural Geometry" title="Physical Constraints" color={C.red}
            text="Geospatial road-network mapping shows many Kampala routes are physically too narrow for safe mixed flow, making safe overtaking geometrically impossible in several corridors." />
        </div>

      </div>
    </div>
  );
};

export default InfographicDashboard;
