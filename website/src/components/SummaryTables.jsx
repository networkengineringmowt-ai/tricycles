import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import PageControls from './PageControls';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const trafficData = [
  {
    junction: "Wandegeya Junction",
    mc: 4520, tc: 1245, pc: 2130, ps: 610, lgv: 180, hgv: 95, nmt: 850
  },
  {
    junction: "Kibuye Roundabout",
    mc: 3850, tc: 1105, pc: 1980, ps: 720, lgv: 240, hgv: 130, nmt: 610
  },
  {
    junction: "Bakuli Intersection",
    mc: 2940, tc: 980, pc: 1450, ps: 890, lgv: 150, hgv: 85, nmt: 540
  },
  {
    junction: "Bwaise Junction",
    mc: 2100, tc: 860, pc: 920, ps: 450, lgv: 110, hgv: 160, nmt: 420
  },
  {
    junction: "Natete Junction",
    mc: 3410, tc: 1050, pc: 1260, ps: 1150, lgv: 190, hgv: 110, nmt: 710
  }
];

const COLUMNS = [
  { key: 'junction', label: 'Study Site', type: 'text' },
  { key: 'mc', label: 'Motorcycles (MC)' },
  { key: 'tc', label: 'Tricycles (TC)' },
  { key: 'pc', label: 'Passenger Cars (PC)' },
  { key: 'ps', label: 'Minibuses (PSV)' },
  { key: 'lgv', label: 'Light Goods Vehicles (LGV)' },
  { key: 'hgv', label: 'Heavy Goods Vehicles (HGV)' },
  { key: 'total', label: 'Total Motorized (Veh/Hr)' },
];

function withTotal(row) {
  return { ...row, total: row.mc + row.tc + row.pc + row.ps + row.lgv + row.hgv };
}

function downloadCsv(rows) {
  const header = COLUMNS.map(c => c.label).join(',');
  const lines = rows.map(r => COLUMNS.map(c => {
    const v = r[c.key];
    return c.type === 'text' ? `"${v}"` : v;
  }).join(','));
  const totals = ['Network Total', 'mc', 'tc', 'pc', 'ps', 'lgv', 'hgv', 'total']
    .map((k, i) => {
      if (i === 0) return '"Network Total"';
      return rows.reduce((acc, r) => acc + r[k], 0);
    }).join(',');
  const csv = [header, ...lines, totals].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'tricycle_pcu_traffic_volumes.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ---------------------------------------------------------------------------
// Apple-style design tokens — same tokens/classes used across the Overview,
// Summary Tables and Analytics tabs for a consistent bright, light theme.
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
const CLASS_COLORS = { mc: C.indigo, tc: C.green, pc: C.blue, ps: C.teal, lgv: C.orange, hgv: C.red };
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
const SummaryTables = ({ goBack, canGoBack } = {}) => {
  const [sortKey, setSortKey] = useState(null);
  const [sortDir, setSortDir] = useState('desc');

  const rows = useMemo(() => trafficData.map(withTotal), []);

  const sortedRows = useMemo(() => {
    if (!sortKey) return rows;
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = a[sortKey], bv = b[sortKey];
      if (typeof av === 'string') {
        return sortDir === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return sortDir === 'asc' ? av - bv : bv - av;
    });
    return copy;
  }, [rows, sortKey, sortDir]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
  };

  const totals = COLUMNS.slice(1).reduce((acc, c) => {
    acc[c.key] = rows.reduce((sum, r) => sum + r[c.key], 0);
    return acc;
  }, {});
  const totalNmt = trafficData.reduce((s, r) => s + r.nmt, 0);
  const tricycleShare = (totals.tc / totals.total) * 100;
  const busiest = rows.reduce((a, b) => (b.total > a.total ? b : a));
  const busiestNmt = trafficData.reduce((a, b) => (b.nmt > a.nmt ? b : a));

  return (
    <div className="apple-summary">
      <style>{`
        .apple-summary { position: relative; width: 100vw; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: ${C.canvas}; padding: 44px 0 90px; }
        .apple-summary-inner { max-width: 1440px; margin: 0 auto; padding: 0 32px; font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif; color: ${C.ink}; }
        .a-hero { text-align: center; max-width: 760px; margin: 0 auto 40px; }
        .a-hero-eyebrow { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: ${C.blue}; margin: 0 0 10px; }
        .a-hero-title { font-size: clamp(2.1rem, 4vw, 3.4rem); font-weight: 800; letter-spacing: -0.03em; margin: 0 0 12px; line-height: 1.05;
          background: linear-gradient(90deg, ${C.indigo}, ${C.blue} 50%, ${C.teal}); -webkit-background-clip: text; background-clip: text; color: transparent; }
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

        .a-chart-box { flex: 1; min-height: 300px; position: relative; width: 100%; margin-top: 10px; }


        .a-table-wrap { overflow-x: auto; margin-top: 6px; }
        .a-table { width: 100%; min-width: 920px; border-collapse: separate; border-spacing: 0 6px; text-align: right; font-size: 0.82rem; }
        .a-table thead th { padding: 0 0 8px; white-space: nowrap; }
        .a-th-btn { display: inline-flex; align-items: center; background: none; border: none; margin: 0; padding: 4px 8px; font: inherit; color: ${C.faint}; font-weight: 700; font-size: 0.64rem; text-transform: uppercase; letter-spacing: 0.02em; cursor: pointer; user-select: none; border-radius: 6px; }
        .a-table thead th[style*="text-align: left"] .a-th-btn { padding-left: 0; }
        .a-th-btn:hover { color: ${C.ink}; }
        .a-th-btn:focus-visible { outline: 2px solid ${C.blue}; outline-offset: 2px; color: ${C.ink}; }
        .a-table tbody tr { background: ${C.canvas}; }
        .a-table tbody td { padding: 14px 8px; font-weight: 600; font-feature-settings: "tnum" 1; color: ${C.ink}; white-space: nowrap; }
        .a-table tbody td:first-child { border-radius: 12px 0 0 12px; text-align: left; font-weight: 800; }
        .a-table tbody td:last-child { border-radius: 0 12px 12px 0; }
        .a-table tfoot td { padding: 14px 8px; font-weight: 800; color: ${C.ink}; border-top: 2px solid rgba(0,0,0,0.08); white-space: nowrap; }
        .a-table tfoot td:first-child { text-align: left; }
        .a-sort-arrow { margin-left: 4px; font-size: 0.6rem; }
        .a-tc-cell { color: ${C.green} !important; }

        .a-nmt-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 14px; margin-top: 6px; }
        .a-nmt-card { background: ${C.canvas}; border-radius: 14px; padding: 16px; border-top: 3px solid ${C.pink}; }
        .a-nmt-name { font-size: 0.72rem; font-weight: 700; color: ${C.faint}; text-transform: uppercase; min-height: 28px; }
        .a-nmt-value { font-size: 1.5rem; font-weight: 800; color: ${C.ink}; margin-top: 6px; }
        .a-nmt-unit { font-size: 0.66rem; color: ${C.faint}; font-weight: 600; }
      `}</style>

      <PageControls onBack={goBack} canGoBack={canGoBack} exportLabel="Export Table (CSV)" onExport={() => downloadCsv(rows)} />

      <div className="apple-summary-inner">

        {/* HERO */}
        <div className="a-hero">
          <p className="a-hero-eyebrow">Field Data Aggregation</p>
          <h1 className="a-hero-title">Primary Traffic Volumes</h1>
          <p className="a-hero-sub">Peak-hour categorized vehicle counts (veh/hr) across five Kampala study sites — 6,400 fifteen-minute intervals sampled in total.</p>
        </div>

        {/* KPI STRIP */}
        <div className="a-kpi-grid">
          <KpiCard icon="fa-database" color={C.blue} label="Sample Size" value="6,400" sub="15-min intervals, all sites" />
          <KpiCard icon="fa-car-side" color={C.indigo} label="Network Total Motorized" value={totals.total.toLocaleString()} sub="veh/hr, sum of all sites" />
          <KpiCard icon="fa-route" color={C.green} label="Tricycle Share" value={`${tricycleShare.toFixed(1)}%`} sub={`${totals.tc.toLocaleString()} veh/hr network-wide`} />
          <KpiCard icon="fa-fire" color={C.orange} label="Busiest Junction" value={busiest.junction.replace(' Junction', '').replace(' Roundabout', '').replace(' Intersection', '')} sub={`${busiest.total.toLocaleString()} veh/hr total motorized`} />
          <KpiCard icon="fa-person-walking" color={C.pink} label="Total NMT Flow" value={totalNmt.toLocaleString()} sub="Pedestrians + cyclists, veh/hr" />
          <KpiCard icon="fa-triangle-exclamation" color={C.red} label="Highest NMT Site" value={busiestNmt.junction.replace(' Junction', '').replace(' Roundabout', '').replace(' Intersection', '')} sub={`${busiestNmt.nmt.toLocaleString()}/hr non-motorized`} />
        </div>

        {/* STACKED BAR: composition by junction */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Empirical Flow Classification" title="Vehicle-Class Volumes by Junction" color={C.indigo} sub="Peak-hour categorized counts (veh/hr) — click a legend item to isolate a class" />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: trafficData.map(r => r.junction),
                  datasets: [
                    { label: 'Motorcycles (MC)', data: trafficData.map(r => r.mc), backgroundColor: CLASS_COLORS.mc },
                    { label: 'Tricycles (TC)', data: trafficData.map(r => r.tc), backgroundColor: CLASS_COLORS.tc },
                    { label: 'Passenger Cars (PC)', data: trafficData.map(r => r.pc), backgroundColor: CLASS_COLORS.pc },
                    { label: 'Minibuses (PSV)', data: trafficData.map(r => r.ps), backgroundColor: CLASS_COLORS.ps },
                    { label: 'Light Goods Vehicles (LGV)', data: trafficData.map(r => r.lgv), backgroundColor: CLASS_COLORS.lgv },
                    { label: 'Heavy Goods Vehicles (HGV)', data: trafficData.map(r => r.hgv), backgroundColor: CLASS_COLORS.hgv },
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
        </div>

        {/* DOUGHNUT + NMT BAR */}
        <div className="a-grid">
          <div className="a-card s-5">
            <SectionHeader eyebrow="Network-Wide Mix" title="Vehicle-Class Composition" color={C.blue} />
            <div className="a-chart-box" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Doughnut
                data={{
                  labels: ['Motorcycles (MC)', 'Tricycles (TC)', 'Passenger Cars (PC)', 'Minibuses (PSV)', 'Light Goods Vehicles (LGV)', 'Heavy Goods Vehicles (HGV)'],
                  datasets: [{
                    data: [totals.mc, totals.tc, totals.pc, totals.ps, totals.lgv, totals.hgv],
                    backgroundColor: [CLASS_COLORS.mc, CLASS_COLORS.tc, CLASS_COLORS.pc, CLASS_COLORS.ps, CLASS_COLORS.lgv, CLASS_COLORS.hgv],
                    borderColor: '#ffffff', borderWidth: 3, hoverOffset: 8,
                  }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false, cutout: '64%',
                  plugins: {
                    legend: { position: 'bottom', labels: { ...legendTheme.labels, font: { size: 10 } } },
                    tooltip: { ...tooltipTheme, callbacks: { label: (ctx) => `${ctx.label}: ${ctx.parsed.toLocaleString()} veh/hr (${(ctx.parsed / totals.total * 100).toFixed(1)}%)` } }
                  }
                }}
              />
            </div>
            <p className="a-footnote">Tricycles account for {tricycleShare.toFixed(1)}% of all motorized flow across the five study sites.</p>
          </div>

          <div className="a-card s-7">
            <SectionHeader eyebrow="Vulnerable Road Users" title="Non-Motorized Transport by Site" color={C.pink} sub="Pedestrian + cyclist flows significantly influence tricycle weaving behavior, particularly at Wandegeya and Bwaise." />
            <div className="a-chart-box">
              <Bar
                data={{
                  labels: trafficData.map(r => r.junction),
                  datasets: [{ label: 'NMT / hour', data: trafficData.map(r => r.nmt), backgroundColor: SITE_COLORS, borderRadius: 8 }]
                }}
                options={{
                  animation: animConfig, maintainAspectRatio: false,
                  scales: { y: { grid: { color: chartGrid }, ticks: { color: chartSub, font: { size: 10.5 } } }, x: { grid: { display: false }, ticks: { color: chartSub, font: { size: 9.5 } } } },
                  plugins: { legend: { display: false }, tooltip: tooltipTheme }
                }}
              />
            </div>
          </div>
        </div>

        {/* DATA TABLE */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Field Data" title="Full Traffic Volume Table" color={C.teal} sub="Click a column header to sort — export the table from the corner control, top right" />
            <div className="a-table-wrap">
              <table className="a-table">
                <thead>
                  <tr>
                    {COLUMNS.map(col => (
                      <th
                        key={col.key}
                        scope="col"
                        aria-sort={sortKey === col.key ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
                        style={col.type === 'text' ? { textAlign: 'left' } : undefined}
                      >
                        <button type="button" className="a-th-btn" onClick={() => handleSort(col.key)}>
                          {col.label}
                          {sortKey === col.key && <span className="a-sort-arrow" aria-hidden="true">{sortDir === 'asc' ? '▲' : '▼'}</span>}
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedRows.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.junction}</td>
                      <td>{row.mc.toLocaleString()}</td>
                      <td className="a-tc-cell">{row.tc.toLocaleString()}</td>
                      <td>{row.pc.toLocaleString()}</td>
                      <td>{row.ps.toLocaleString()}</td>
                      <td>{row.lgv.toLocaleString()}</td>
                      <td>{row.hgv.toLocaleString()}</td>
                      <td style={{ color: C.blue }}>{row.total.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Network Total</td>
                    <td>{totals.mc.toLocaleString()}</td>
                    <td className="a-tc-cell">{totals.tc.toLocaleString()}</td>
                    <td>{totals.pc.toLocaleString()}</td>
                    <td>{totals.ps.toLocaleString()}</td>
                    <td>{totals.lgv.toLocaleString()}</td>
                    <td>{totals.hgv.toLocaleString()}</td>
                    <td style={{ color: C.blue }}>{totals.total.toLocaleString()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SummaryTables;
