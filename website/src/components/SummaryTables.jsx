import React, { useState, useMemo } from 'react';
import PageControls, { downloadJsonFile, downloadCsvBundle } from './PageControls';
import MethodologyPanel from './MethodologyPanel';
import useTrafficStats from '../lib/useTrafficStats';
import { JUNCTION_LEG_CONFIG, simulateDirectionalSplit } from '../lib/directionalSplit';

const COLUMNS = [
  { key: 'junction', label: 'Study Site', type: 'text' },
  { key: 'Cars', label: 'Passenger Cars' },
  { key: 'Boda_bodas', label: 'Boda Bodas' },
  { key: 'Tricycles', label: 'Tricycles' },
  { key: 'Minibuses', label: 'Minibuses' },
  { key: 'Heavy_Trucks', label: 'Heavy Trucks' },
  { key: 'Total', label: 'Total Motorized (Veh/Hr)' },
];

function downloadCsv(rows) {
  const header = COLUMNS.map(c => c.label).join(',');
  const lines = rows.map(r => COLUMNS.map(c => {
    const v = r[c.key];
    return c.type === 'text' ? `"${v}"` : Math.round(v);
  }).join(','));
  const totalsRow = ['Network Total', ...COLUMNS.slice(1).map(c => Math.round(rows.reduce((acc, r) => acc + r[c.key], 0)))];
  const csv = [header, ...lines, totalsRow.map((v,i)=> i===0?`"${v}"`:v).join(',')].join('\n');
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

// CSV builders for the four breakdown tables below the main peak-hourly
// table -- each mirrors the columns actually rendered in its <table>, so the
// downloaded file matches what's on screen exactly, filters aside (the
// bundle always exports the unfiltered, all-junction version of a table).
function csvFromAdt(stats) {
  const header = 'Study Site,Cars,Boda Bodas,Tricycles,Minibuses,Heavy Trucks,ADT (Total),ADT (Excl. Motorcycles)';
  const lines = Object.entries(stats.adtByIntersection).map(([junction, v]) => [
    `"${junction}"`, Math.round(v.perClass.Cars), Math.round(v.perClass.Boda_bodas), Math.round(v.perClass.Tricycles),
    Math.round(v.perClass.Minibuses), Math.round(v.perClass.Heavy_Trucks), Math.round(v.adtTotal), Math.round(v.adtExclMotorcycles),
  ].join(','));
  const network = `"Network (sum of 5 sites)",,,,,,${Math.round(stats.networkAdt.adtTotal)},${Math.round(stats.networkAdt.adtExclMotorcycles)}`;
  return [header, ...lines, network].join('\n');
}
function csvFromVehicleClass(stats) {
  const header = 'Study Site,Vehicle Class,Total Count,ADT,Share of Site Volume (%)';
  const lines = stats.vehicleClassBreakdown.map((r) =>
    `"${r.junction}","${r.vehicleClass.replace('_', ' ')}",${Math.round(r.total)},${Math.round(r.adt)},${r.sharePct.toFixed(2)}`);
  return [header, ...lines].join('\n');
}
function csvFromDaily(stats) {
  const header = 'Study Site,Date,Cars,Boda Bodas,Tricycles,Minibuses,Heavy Trucks,Total,Total (Excl. Motorcycles)';
  const lines = stats.dailyBreakdown.map((r) =>
    `"${r.junction}","${r.date}",${Math.round(r.Cars)},${Math.round(r.Boda_bodas)},${Math.round(r.Tricycles)},${Math.round(r.Minibuses)},${Math.round(r.Heavy_Trucks)},${Math.round(r.Total)},${Math.round(r.TotalExclMC)}`);
  return [header, ...lines].join('\n');
}
function csvFromWeekly(stats) {
  const header = 'Study Site,Week,Date Range,Days,Total,Total (Excl. Motorcycles),Avg Daily Total,Avg Daily (Excl. Motorcycles)';
  const lines = stats.weeklyBreakdown.map((r) =>
    `"${r.junction}","${r.week}","${r.dateRange}",${r.daysInWeek},${Math.round(r.Total)},${Math.round(r.TotalExclMC)},${Math.round(r.avgDailyTotal)},${Math.round(r.avgDailyTotalExclMC)}`);
  return [header, ...lines].join('\n');
}
function csvFromMonthly(stats) {
  const header = 'Study Site,Month,Year,Days Observed,Total,Total (Excl. Motorcycles),ADT,ADT (Excl. Motorcycles)';
  const lines = stats.monthlyBreakdown.map((m) =>
    `"${m.junction}","${m.month}",2026,${m.daysObserved},${Math.round(m.Total)},${Math.round(m.TotalExclMC)},${Math.round(m.adt)},${Math.round(m.adtExclMC)}`);
  return [header, ...lines].join('\n');
}
function csvFromDirectionalSplit(stats, skew) {
  const header = 'Study Site,Junction Type (assumed),Approach Leg,Assumed Share (%),SIMULATED ADT for this Leg,Source / Confidence';
  const lines = [];
  Object.entries(JUNCTION_LEG_CONFIG).forEach(([junction, config]) => {
    const adt = stats.adtByIntersection[junction]?.adtTotal || 0;
    simulateDirectionalSplit(adt, config, skew).forEach((row) => {
      lines.push(`"${junction}","${config.type}","${row.leg}",${row.pct.toFixed(1)},${Math.round(row.volume)},"${config.source}"`);
    });
  });
  const note = 'NOTE: this table is a disclosed SIMULATION. The field study recorded no per-direction/turning-movement data (no Direction column in any source file). Only the junction totals (ADT) are real, measured figures; the per-leg split above is modeled from an assumed configuration, adjustable via the skew parameter.';
  return [header, ...lines, '', `"${note}"`].join('\n');
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
  const [dailyJunction, setDailyJunction] = useState('All');
  const [weeklyJunction, setWeeklyJunction] = useState('All');
  const [dirJunction, setDirJunction] = useState(Object.keys(JUNCTION_LEG_CONFIG)[0]);
  const [dirSkew, setDirSkew] = useState(0.3);
  const stats = useTrafficStats();

  const rows = useMemo(() => {
    if (!stats) return [];
    return Object.entries(stats.peakHourlyByIntersection).map(([junction, v]) => ({ junction, ...v }));
  }, [stats]);

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

  const totals = useMemo(() => COLUMNS.slice(1).reduce((acc, c) => {
    acc[c.key] = rows.reduce((sum, r) => sum + r[c.key], 0);
    return acc;
  }, {}), [rows]);

  const busiest = rows.length ? rows.reduce((a, b) => (b.Total > a.Total ? b : a)) : null;
  const tricycleShare = stats ? stats.overallCompositionPct.Tricycles : 0;

  // Column min/max (numeric columns only) for the table's conditional
  // formatting -- each cell's background intensity reflects where its value
  // falls in that column's observed range, so magnitude is visible at a
  // glance without reading every number.
  const colRange = useMemo(() => {
    const ranges = {};
    COLUMNS.forEach((c) => {
      if (c.type === 'text') return;
      const vals = rows.map((r) => r[c.key]);
      ranges[c.key] = { min: Math.min(...vals), max: Math.max(...vals) };
    });
    return ranges;
  }, [rows]);
  const cellShade = (col, val) => {
    const r = colRange[col];
    if (!r || r.max === r.min) return 'transparent';
    const frac = (val - r.min) / (r.max - r.min);
    return hex2rgba(C.blue, 0.06 + frac * 0.22);
  };

  return (
    <div className="apple-summary">
      <style>{`
        .apple-summary { position: relative; width: 100vw; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; background: ${C.canvas}; padding: 44px 12px 90px; }
        .apple-summary-inner { width: 100%; margin: 0 auto; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif; color: ${C.ink}; }
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

        .a-table-wrap { overflow-x: auto; margin-top: 6px; position: relative; scrollbar-width: thin; scrollbar-color: rgba(0,0,0,0.28) transparent; }
        .a-table-wrap::-webkit-scrollbar { height: 10px; }
        .a-table-wrap::-webkit-scrollbar-track { background: transparent; }
        .a-table-wrap::-webkit-scrollbar-thumb { background-color: rgba(0,0,0,0.28); border-radius: 8px; border: 2px solid ${C.canvas}; background-clip: padding-box; }
        .a-table-wrap::-webkit-scrollbar-thumb:hover { background-color: rgba(0,0,0,0.42); }
        @media (max-width: 860px) {
          .a-table-wrap::after {
            content: ''; position: sticky; float: right; top: 0; right: 0; height: 100%; width: 28px;
            margin-left: -28px; margin-top: -1px;
            background: linear-gradient(to right, transparent, ${C.canvas});
            pointer-events: none; display: block;
          }
        }
        .a-table { width: 100%; min-width: 820px; border-collapse: separate; border-spacing: 0 6px; text-align: right; font-size: 0.82rem; }
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
        .a-sort-arrows { display: inline-flex; flex-direction: column; margin-left: 6px; line-height: 0.6; }
        .a-sort-arrows span { font-size: 0.5rem; color: rgba(0,0,0,0.18); }
        .a-sort-arrows span.active { color: ${C.blue}; }
        .a-tc-cell { color: ${C.green} !important; }
        .a-table tbody td.a-shaded { border-radius: 8px; }

        .a-loading { padding: 40px; text-align: center; color: ${C.faint}; font-size: 0.9rem; }

        .a-toggle-row { display: flex; gap: 8px; flex-wrap: wrap; }
        .a-toggle-btn { border: 1px solid rgba(0,0,0,0.08); background: #fff; color: ${C.sub}; font-weight: 600; font-size: 0.82rem; padding: 8px 14px; border-radius: 10px; cursor: pointer; transition: all .15s ease; }
        .a-toggle-btn.active { background: ${C.ink}; color: #fff; border-color: ${C.ink}; }
        .a-illustrative-badge { display: inline-block; font-size: 0.62rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.03em; color: ${C.orange}; background: ${hex2rgba(C.orange, 0.12)}; padding: 3px 8px; border-radius: 6px; margin-left: 8px; vertical-align: middle; }
        .a-slider { -webkit-appearance: none; width: 100%; height: 6px; border-radius: 4px; background: #e5e5ea; }
        .a-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #ffffff; box-shadow: 0 1px 4px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.06); cursor: pointer; border: 6px solid ${C.orange}; }
        .a-slider::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #ffffff; border: 6px solid ${C.orange}; cursor: pointer; }
        .a-slider:focus-visible { outline: 2px solid ${C.orange}; outline-offset: 3px; }
        .a-slider-head { display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 700; color: ${C.ink}; margin-bottom: 8px; }
        .a-dir-note { font-size: 0.78rem; color: ${C.sub}; line-height: 1.6; background: ${hex2rgba(C.orange, 0.07)}; border: 1px solid ${hex2rgba(C.orange, 0.22)}; border-radius: 12px; padding: 12px 14px; margin-top: 14px; }
        .a-dir-source { font-size: 0.72rem; color: ${C.faint}; margin-top: 10px; }
        .a-toggle-btn:hover:not(.active) { background: #f5f5f7; }
        .a-mc-cell { color: ${C.purple} !important; }

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

      <PageControls onBack={goBack} canGoBack={canGoBack} exportOptions={stats ? [
        { id: 'csv', label: 'Peak-Hourly Table (CSV)', icon: 'fa-file-csv', hint: 'The table above, current sort order', action: () => downloadCsv(rows) },
        { id: 'bundle', label: 'All 7 Tables Bundled (ZIP)', icon: 'fa-file-zipper', hint: 'ADT, vehicle class, daily, weekly, monthly/yearly, directional split', action: () => downloadCsvBundle('tricycle_pcu_summary_tables.zip', [
          { name: 'peak_hourly_by_junction.csv', content: (() => {
            const header = COLUMNS.map((c) => c.label).join(',');
            const lines = rows.map((r) => COLUMNS.map((c) => (c.type === 'text' ? `"${r[c.key]}"` : Math.round(r[c.key]))).join(','));
            return [header, ...lines].join('\n');
          })() },
          { name: 'adt_by_junction.csv', content: csvFromAdt(stats) },
          { name: 'vehicle_class_breakdown.csv', content: csvFromVehicleClass(stats) },
          { name: 'daily_breakdown_all_20_days.csv', content: csvFromDaily(stats) },
          { name: 'weekly_breakdown.csv', content: csvFromWeekly(stats) },
          { name: 'monthly_yearly_breakdown.csv', content: csvFromMonthly(stats) },
          { name: 'simulated_directional_split_MODEL_NOT_MEASURED.csv', content: csvFromDirectionalSplit(stats, dirSkew) },
        ]) },
        { id: 'json', label: 'Full Dataset (JSON)', icon: 'fa-file-code', hint: 'All computed network stats, raw', action: () => downloadJsonFile('tricycle_pcu_summary_stats.json', stats) },
        { id: 'print', label: 'Print / Save as PDF', icon: 'fa-print', hint: 'Opens your browser’s print dialog', action: () => window.print() },
      ] : null} />

      <div className="apple-summary-inner">

        {/* HERO */}
        <div className="a-hero">
          <p className="a-hero-eyebrow">Field Data Aggregation</p>
          <h1 className="a-hero-title">Primary Traffic Volumes</h1>
          <p className="a-hero-sub">Peak-hour categorized vehicle counts (veh/hr) across five Kampala study sites — computed live from the 6,400 fifteen-minute intervals sampled in the 20-day field study.</p>
        </div>

        {!stats ? (
          <div className="a-loading"><i className="fa-solid fa-circle-notch fa-spin" style={{ marginRight: '8px' }}></i>Computing live figures from field data…</div>
        ) : (
        <>
        {/* KPI STRIP */}
        <div className="a-kpi-grid">
          <KpiCard icon="fa-database" color={C.blue} label="Sample Size" value={stats.sampleSizeIntervals.toLocaleString()} sub="15-min intervals, all 5 sites" />
          <KpiCard icon="fa-car-side" color={C.indigo} label="Network Peak-Hour Total" value={Math.round(totals.Total).toLocaleString()} sub="Veh/hr, sum of all sites · n = 2,000 peak intervals" />
          <KpiCard icon="fa-route" color={C.green} label="Tricycle Share" value={`${tricycleShare.toFixed(1)}%`} sub={`${Math.round(totals.Tricycles).toLocaleString()} veh/hr network-wide · n = 2,000 peak intervals`} />
          <KpiCard icon="fa-fire" color={C.orange} label="Busiest Junction" value={stats.shortName(busiest.junction)} sub={`${Math.round(busiest.Total).toLocaleString()} veh/hr total motorized`} />
          <KpiCard icon="fa-gauge-high" color={C.pink} label="Network PCU (headway-ratio)" value={stats.pcuHeadwayOverall.toFixed(2)} sub="Mean across all 5 sites · n = 2,160 intervals" />
          <KpiCard icon="fa-calendar-day" color={C.blue2} label="Network ADT (Total)" value={Math.round(stats.networkAdt.adtTotal).toLocaleString()} sub={`All 5 classes · mean of ${stats.networkAdt.daysObserved} real observed days`} />
          <KpiCard icon="fa-ban" color={C.purple} label="Network ADT (Excl. Motorcycles)" value={Math.round(stats.networkAdt.adtExclMotorcycles).toLocaleString()} sub="Cars + Tricycles + Minibuses + Heavy Trucks only" />
        </div>

        {/* All charts previously here (Vehicle-Class Volumes by Junction,
            Vehicle-Class Composition, Tricycle Share by Site, Hourly Volume
            Profile by Study Site, Vehicle-Class Composition Profile by Site,
            PCU Ratio vs V/C Ratio, Day vs Night Tricycle Volume by Site,
            Incidents by Severity, Incidents by Type) have moved to the
            Analytics tab, where every other chart on this site now lives --
            see InfographicDashboard.jsx. Every table below, and the
            Simulated Directional Split section, are unchanged. */}

        {/* DATA TABLE */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Field Data" title="Full Traffic Volume Table" color={C.teal} sub="Peak-hour categorized counts, all five sites, sortable by column" />
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
                          <span className="a-sort-arrows" aria-hidden="true">
                            <span className={sortKey === col.key && sortDir === 'asc' ? 'active' : ''}>▲</span>
                            <span className={sortKey === col.key && sortDir === 'desc' ? 'active' : ''}>▼</span>
                          </span>
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedRows.map((row) => (
                    <tr key={row.junction}>
                      <td>{row.junction}</td>
                      <td className="a-shaded" style={{ background: cellShade('Cars', row.Cars) }}>{Math.round(row.Cars).toLocaleString()}</td>
                      <td className="a-shaded" style={{ background: cellShade('Boda_bodas', row.Boda_bodas) }}>{Math.round(row.Boda_bodas).toLocaleString()}</td>
                      <td className="a-shaded a-tc-cell" style={{ background: cellShade('Tricycles', row.Tricycles) }}>{Math.round(row.Tricycles).toLocaleString()}</td>
                      <td className="a-shaded" style={{ background: cellShade('Minibuses', row.Minibuses) }}>{Math.round(row.Minibuses).toLocaleString()}</td>
                      <td className="a-shaded" style={{ background: cellShade('Heavy_Trucks', row.Heavy_Trucks) }}>{Math.round(row.Heavy_Trucks).toLocaleString()}</td>
                      <td className="a-shaded" style={{ background: cellShade('Total', row.Total), color: C.blue }}>{Math.round(row.Total).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Network Total</td>
                    <td>{Math.round(totals.Cars).toLocaleString()}</td>
                    <td>{Math.round(totals.Boda_bodas).toLocaleString()}</td>
                    <td className="a-tc-cell">{Math.round(totals.Tricycles).toLocaleString()}</td>
                    <td>{Math.round(totals.Minibuses).toLocaleString()}</td>
                    <td>{Math.round(totals.Heavy_Trucks).toLocaleString()}</td>
                    <td style={{ color: C.blue }}>{Math.round(totals.Total).toLocaleString()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* TRAFFIC CRITICALITY RANKING */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Asset Prioritization" title="Traffic Criticality Ranking" color={C.red}
              sub="Composite 0–100 index combining each intersection's traffic demand, congestion stress, tricycle-induced friction and mixed-traffic complexity — see Methodology below for the exact weights." />
            <div className="a-table-wrap">
              <table className="a-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Rank</span></th>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Study Site</span></th>
                    <th scope="col"><span className="a-th-btn">Criticality Index</span></th>
                    <th scope="col"><span className="a-th-btn">Mean Daily Volume</span></th>
                    <th scope="col"><span className="a-th-btn">V/C Ratio (mean)</span></th>
                    <th scope="col"><span className="a-th-btn">PCU (headway)</span></th>
                    <th scope="col"><span className="a-th-btn">Tricycle Share</span></th>
                  </tr>
                </thead>
                <tbody>
                  {stats.criticalityRanking.map((r) => (
                    <tr key={r.name}>
                      <td>#{r.rank}</td>
                      <td>{r.name}</td>
                      <td style={{ color: C.red }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ position: 'relative', width: '60px', height: '6px', borderRadius: '4px', background: 'rgba(0,0,0,0.08)', overflow: 'hidden' }}>
                            <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${r.index}%`, background: C.red, borderRadius: '4px' }}></span>
                          </span>
                          {r.index.toFixed(1)}
                        </span>
                      </td>
                      <td>{Math.round(r.meanDailyVolume).toLocaleString()}</td>
                      <td>{r.vcMean.toFixed(3)}</td>
                      <td>{r.pcuHeadway.toFixed(3)}</td>
                      <td>{r.tricycleSharePct.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ADT BY JUNCTION -- Total vs Excluding Motorcycles, per vehicle class */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Field Data Aggregation, All 20 Days" title="Average Daily Traffic (ADT) by Junction" color={C.blue2}
              sub="Mean of the daily totals across all 20 real observed days, per intersection — Total ADT and ADT excluding motorcycles (Boda Bodas) side by side, with the per-class breakdown behind each." />
            <div className="a-table-wrap">
              <table className="a-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Study Site</span></th>
                    <th scope="col"><span className="a-th-btn">Cars</span></th>
                    <th scope="col"><span className="a-th-btn">Boda Bodas</span></th>
                    <th scope="col"><span className="a-th-btn">Tricycles</span></th>
                    <th scope="col"><span className="a-th-btn">Minibuses</span></th>
                    <th scope="col"><span className="a-th-btn">Heavy Trucks</span></th>
                    <th scope="col"><span className="a-th-btn">ADT (Total)</span></th>
                    <th scope="col"><span className="a-th-btn">ADT (Excl. Motorcycles)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(stats.adtByIntersection).map(([junction, v]) => (
                    <tr key={junction}>
                      <td>{junction}</td>
                      <td>{Math.round(v.perClass.Cars).toLocaleString()}</td>
                      <td>{Math.round(v.perClass.Boda_bodas).toLocaleString()}</td>
                      <td className="a-tc-cell">{Math.round(v.perClass.Tricycles).toLocaleString()}</td>
                      <td>{Math.round(v.perClass.Minibuses).toLocaleString()}</td>
                      <td>{Math.round(v.perClass.Heavy_Trucks).toLocaleString()}</td>
                      <td style={{ color: C.blue }}>{Math.round(v.adtTotal).toLocaleString()}</td>
                      <td className="a-mc-cell">{Math.round(v.adtExclMotorcycles).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Network (sum of 5 sites)</td>
                    <td colSpan={5}></td>
                    <td style={{ color: C.blue }}>{Math.round(stats.networkAdt.adtTotal).toLocaleString()}</td>
                    <td className="a-mc-cell">{Math.round(stats.networkAdt.adtExclMotorcycles).toLocaleString()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p className="a-footnote">ADT = mean(sum of vehicle counts on a calendar day) across the {stats.adtByIntersection[Object.keys(stats.adtByIntersection)[0]].daysObserved} real observed days per site. "Excl. Motorcycles" drops Boda Bodas (the only motorcycle-taxi class in this dataset) from the daily sum before averaging.</p>
          </div>
        </div>

        {/* VEHICLE CLASS BREAKDOWN -- per junction x per vehicle class */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Per Junction × Per Vehicle Class" title="Vehicle Class Breakdown by Junction" color={C.indigo}
              sub="Total count, ADT and % share of that junction's combined volume, for each of the 5 real vehicle classes — 20-day field study." />
            <div className="a-table-wrap">
              <table className="a-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Study Site</span></th>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Vehicle Class</span></th>
                    <th scope="col"><span className="a-th-btn">Total Count</span></th>
                    <th scope="col"><span className="a-th-btn">ADT</span></th>
                    <th scope="col"><span className="a-th-btn">Share of Site Volume</span></th>
                  </tr>
                </thead>
                <tbody>
                  {stats.vehicleClassBreakdown.map((r) => (
                    <tr key={`${r.junction}-${r.vehicleClass}`}>
                      <td>{r.junction}</td>
                      <td style={{ textAlign: 'left', fontWeight: 700 }}>{r.vehicleClass.replace('_', ' ')}</td>
                      <td>{Math.round(r.total).toLocaleString()}</td>
                      <td>{Math.round(r.adt).toLocaleString()}</td>
                      <td className={r.vehicleClass === 'Tricycles' ? 'a-tc-cell' : undefined}>{r.sharePct.toFixed(1)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* DAILY BREAKDOWN -- per junction x per day */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Per Junction × Per Day" title="Daily Breakdown, All 20 Observed Days" color={C.green}
              sub="Every real recorded day, per site — Total and Total-excluding-motorcycles alongside the 5-class count." />
            <div className="a-toggle-row" role="group" aria-label="Filter daily breakdown by study site" style={{ marginBottom: '14px' }}>
              {['All', ...Object.keys(stats.adtByIntersection)].map((j) => (
                <button key={j} type="button" className={`a-toggle-btn ${dailyJunction === j ? 'active' : ''}`} onClick={() => setDailyJunction(j)}>
                  {j === 'All' ? 'All Junctions' : stats.shortName(j)}
                </button>
              ))}
            </div>
            <div className="a-table-wrap">
              <table className="a-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Study Site</span></th>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Date</span></th>
                    <th scope="col"><span className="a-th-btn">Cars</span></th>
                    <th scope="col"><span className="a-th-btn">Boda Bodas</span></th>
                    <th scope="col"><span className="a-th-btn">Tricycles</span></th>
                    <th scope="col"><span className="a-th-btn">Minibuses</span></th>
                    <th scope="col"><span className="a-th-btn">Heavy Trucks</span></th>
                    <th scope="col"><span className="a-th-btn">Total</span></th>
                    <th scope="col"><span className="a-th-btn">Total (Excl. MC)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {stats.dailyBreakdown.filter((r) => dailyJunction === 'All' || r.junction === dailyJunction).map((r) => (
                    <tr key={`${r.junction}-${r.date}`}>
                      <td>{r.junction}</td>
                      <td style={{ textAlign: 'left', fontWeight: 700 }}>{r.date}</td>
                      <td>{Math.round(r.Cars).toLocaleString()}</td>
                      <td>{Math.round(r.Boda_bodas).toLocaleString()}</td>
                      <td className="a-tc-cell">{Math.round(r.Tricycles).toLocaleString()}</td>
                      <td>{Math.round(r.Minibuses).toLocaleString()}</td>
                      <td>{Math.round(r.Heavy_Trucks).toLocaleString()}</td>
                      <td style={{ color: C.blue }}>{Math.round(r.Total).toLocaleString()}</td>
                      <td className="a-mc-cell">{Math.round(r.TotalExclMC).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* WEEKLY BREAKDOWN -- per junction x per calendar week */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Per Junction × Per Week" title="Weekly Breakdown" color={C.orange}
              sub="The 20 real observed days bucketed by calendar week-of-month (1–7, 8–14, 15–20) — Week 3 is a genuine partial 6-day week, not padded." />
            <div className="a-toggle-row" role="group" aria-label="Filter weekly breakdown by study site" style={{ marginBottom: '14px' }}>
              {['All', ...Object.keys(stats.adtByIntersection)].map((j) => (
                <button key={j} type="button" className={`a-toggle-btn ${weeklyJunction === j ? 'active' : ''}`} onClick={() => setWeeklyJunction(j)}>
                  {j === 'All' ? 'All Junctions' : stats.shortName(j)}
                </button>
              ))}
            </div>
            <div className="a-table-wrap">
              <table className="a-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Study Site</span></th>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Week</span></th>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Date Range</span></th>
                    <th scope="col"><span className="a-th-btn">Days</span></th>
                    <th scope="col"><span className="a-th-btn">Total</span></th>
                    <th scope="col"><span className="a-th-btn">Total (Excl. MC)</span></th>
                    <th scope="col"><span className="a-th-btn">Avg Daily Total</span></th>
                    <th scope="col"><span className="a-th-btn">Avg Daily (Excl. MC)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {stats.weeklyBreakdown.filter((r) => weeklyJunction === 'All' || r.junction === weeklyJunction).map((r) => (
                    <tr key={`${r.junction}-${r.week}`}>
                      <td>{r.junction}</td>
                      <td style={{ textAlign: 'left', fontWeight: 700 }}>{r.week}</td>
                      <td style={{ textAlign: 'left' }}>{r.dateRange}</td>
                      <td>{r.daysInWeek}</td>
                      <td style={{ color: C.blue }}>{Math.round(r.Total).toLocaleString()}</td>
                      <td className="a-mc-cell">{Math.round(r.TotalExclMC).toLocaleString()}</td>
                      <td>{Math.round(r.avgDailyTotal).toLocaleString()}</td>
                      <td className="a-mc-cell">{Math.round(r.avgDailyTotalExclMC).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* MONTHLY / YEARLY BREAKDOWN -- honestly collapses to the single real period covered */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Per Junction × Per Month / Per Year" title="Monthly &amp; Yearly Breakdown" color={C.red}
              sub="The field20 survey covers exactly one real calendar month (June 2026) and one real calendar year (2026) — both tables below collapse to that single period per site, rather than fabricating additional months or years to fill a longer series." />
            <div className="a-table-wrap">
              <table className="a-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Study Site</span></th>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Month</span></th>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Year</span></th>
                    <th scope="col"><span className="a-th-btn">Days Observed</span></th>
                    <th scope="col"><span className="a-th-btn">Total</span></th>
                    <th scope="col"><span className="a-th-btn">Total (Excl. MC)</span></th>
                    <th scope="col"><span className="a-th-btn">ADT</span></th>
                    <th scope="col"><span className="a-th-btn">ADT (Excl. MC)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {stats.monthlyBreakdown.map((m) => (
                    <tr key={m.junction}>
                      <td>{m.junction}</td>
                      <td style={{ textAlign: 'left', fontWeight: 700 }}>{m.month}</td>
                      <td style={{ textAlign: 'left', fontWeight: 700 }}>2026</td>
                      <td>{m.daysObserved}</td>
                      <td style={{ color: C.blue }}>{Math.round(m.Total).toLocaleString()}</td>
                      <td className="a-mc-cell">{Math.round(m.TotalExclMC).toLocaleString()}</td>
                      <td>{Math.round(m.adt).toLocaleString()}</td>
                      <td className="a-mc-cell">{Math.round(m.adtExclMC).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="a-footnote">No field data exists outside June 2026 for this study — the Monthly and Yearly rows are identical by construction, both reflecting the same real 20-day sample, and are shown separately only to satisfy both grouping dimensions.</p>
          </div>
        </div>

        {/* DIRECTIONAL SPLIT SIMULATOR -- explicitly modeled, not measured: no source file records vehicle direction/turning movement */}
        <div className="a-grid">
          <div className="a-card s-12">
            <SectionHeader eyebrow="Per Junction × Per Approach Direction" title={<>Simulated Directional Split by Junction<span className="a-illustrative-badge">Model, not measured</span></>} color={C.purple}
              sub="Neither field dataset recorded which direction a vehicle approached from or turned toward, so no real per-direction volume exists to report. This instead distributes each junction's real ADT across its approach legs using an adjustable, clearly-labeled assumption -- not a measurement." />
            <div className="a-toggle-row" role="group" aria-label="Choose junction for directional split simulation" style={{ marginBottom: '18px' }}>
              {Object.keys(JUNCTION_LEG_CONFIG).map((j) => (
                <button key={j} type="button" className={`a-toggle-btn ${dirJunction === j ? 'active' : ''}`} onClick={() => setDirJunction(j)}>
                  {stats.shortName ? stats.shortName(j) : j}
                </button>
              ))}
            </div>
            <div style={{ maxWidth: '420px', marginBottom: '18px' }}>
              <div className="a-slider-head"><span>Assumed primary-corridor bias</span><span>{Math.round(dirSkew * 100)}%</span></div>
              <input type="range" min="0" max="0.6" step="0.05" value={dirSkew} onChange={(e) => setDirSkew(parseFloat(e.target.value))} className="a-slider" aria-label="Assumed primary-corridor bias" />
              <p className="a-footnote" style={{ marginTop: '6px' }}>0% = an even split across every leg (the most neutral assumption possible). Higher values assume the through-corridor legs (marked ★ below) carry proportionally more traffic than the minor legs -- a common real-world pattern, but still an assumption, not something this study measured.</p>
            </div>
            <div className="a-table-wrap">
              <table className="a-table">
                <thead>
                  <tr>
                    <th scope="col" style={{ textAlign: 'left' }}><span className="a-th-btn">Approach Leg</span></th>
                    <th scope="col"><span className="a-th-btn">Assumed Share</span></th>
                    <th scope="col"><span className="a-th-btn">Simulated ADT for This Leg</span></th>
                  </tr>
                </thead>
                <tbody>
                  {simulateDirectionalSplit(stats.adtByIntersection[dirJunction]?.adtTotal || 0, JUNCTION_LEG_CONFIG[dirJunction], dirSkew).map((row) => (
                    <tr key={row.leg}>
                      <td style={{ textAlign: 'left' }}>{row.isPrimary && '★ '}{row.leg}</td>
                      <td>{row.pct.toFixed(1)}%</td>
                      <td style={{ color: C.purple }}>{Math.round(row.volume).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Junction total (real, measured ADT)</td>
                    <td>100%</td>
                    <td style={{ color: C.blue }}>{Math.round(stats.adtByIntersection[dirJunction]?.adtTotal || 0).toLocaleString()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="a-dir-note">
              <b>{JUNCTION_LEG_CONFIG[dirJunction].type}.</b> The junction total above (ADT) is a real, measured figure from the field survey, and the junction type / leg count is confirmed by the study author. What's still simulated rather than measured is (a) the identity of any leg not backed by the public reference cited below -- left as an unconfirmed placeholder rather than an invented street name -- and (b) how much of the junction's real volume each leg actually carries, since no turning-movement/direction data was ever collected.
            </div>
            <p className="a-dir-source">Configuration source: {JUNCTION_LEG_CONFIG[dirJunction].source}</p>
          </div>
        </div>

        {/* METHODOLOGY */}
        <div className="a-grid">
          <MethodologyPanel color={C.teal} keys={['peakHourly', 'compositionPct', 'pcuHeadway', 'criticalityIndex', 'hourlyProfileByIntersection', 'pcuVcCorrelation', 'dayNightByIntersection', 'incidentSeverity', 'incidentSeverityTotals', 'adtByIntersection', 'networkAdt', 'dailyBreakdown', 'weeklyBreakdown', 'monthlyYearlyBreakdown', 'vehicleClassBreakdown']} />
        </div>
        </>
        )}

      </div>
    </div>
  );
};

export default SummaryTables;
