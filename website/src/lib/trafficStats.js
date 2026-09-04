// ---------------------------------------------------------------------------
// Single source of truth for every data-backed figure shown on the Overview,
// Analytics and Summary Tables tabs. Nothing here is a hand-typed constant:
// every number is computed at runtime, in the browser, from the two real
// field datasets shipped as CSV assets (public/data/*.csv). If the source
// data changes, every figure on the site updates automatically.
//
// Two datasets, not interchangeable -- every stat below records which one it
// came from:
//
//   field20    20 days x 5 intersections, 06:00-21:45 only, 6,400 fifteen-
//              minute intervals. Vehicle-class counts + weather. No headway,
//              no V/C ratio, no night hours.
//   baseline7  7 days x 5 intersections, day + night sessions, 2,160
//              fifteen-minute intervals (336/site day, 96/site night).
//              Vehicle-class counts + per-interval headway + V/C ratio.
//              No weather field.
//   incidents  840 real traffic-incident records (type x severity).
//
// All formulas are also exported as human-readable strings (FORMULAS) so the
// UI can show exactly how each figure was derived, next to the figure.
// ---------------------------------------------------------------------------

const VEH_COLS = ['Cars', 'Boda_bodas', 'Tricycles', 'Minibuses', 'Heavy_Trucks'];

// --- tiny CSV parser (data is clean/numeric, no quoted commas) ------------
export function parseCsv(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',');
  return lines.slice(1).map((line) => {
    const cells = line.split(',');
    const row = {};
    headers.forEach((h, i) => {
      const v = cells[i];
      row[h] = v !== '' && !isNaN(v) ? parseFloat(v) : v;
    });
    return row;
  });
}

// --- basic statistics -------------------------------------------------------
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
const mean = (arr) => sum(arr) / arr.length;
const variance = (arr) => {
  const m = mean(arr);
  return sum(arr.map((x) => (x - m) ** 2)) / (arr.length - 1);
};
const std = (arr) => Math.sqrt(variance(arr));

// --- order statistics -------------------------------------------------------
// Linear-interpolation quantile (same convention as Excel/NumPy's default
// "linear" method), operating on a pre-sorted array.
function quantileSorted(sorted, q) {
  const n = sorted.length;
  if (n === 1) return sorted[0];
  const pos = q * (n - 1);
  const lo = Math.floor(pos), hi = Math.ceil(pos);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}
const median = (arr) => {
  const s = [...arr].sort((a, b) => a - b);
  return quantileSorted(s, 0.5);
};
// Discrete mode -- the most frequently occurring exact value. For the
// count-style fields used here (vehicle counts, rounded ratios) this is a
// meaningful, well-defined statistic; ties resolve to the smallest value.
function mode(arr) {
  const freq = new Map();
  arr.forEach((v) => freq.set(v, (freq.get(v) || 0) + 1));
  let best = arr[0], bestCount = 0;
  freq.forEach((count, v) => {
    if (count > bestCount || (count === bestCount && v < best)) { best = v; bestCount = count; }
  });
  return { value: best, count: bestCount };
}
// Full descriptive-statistics summary used by the Analytics tab's
// "Descriptive Statistics" panels -- every field computed live from the
// array passed in, never hand-typed.
function describe(arr) {
  const s = [...arr].sort((a, b) => a - b);
  const n = s.length;
  const m = mean(s);
  const sd = n > 1 ? std(s) : 0;
  const q1 = quantileSorted(s, 0.25), q3 = quantileSorted(s, 0.75);
  return {
    n, mean: m, median: quantileSorted(s, 0.5), mode: mode(s).value, std: sd,
    min: s[0], max: s[n - 1], q1, q3, iqr: q3 - q1,
    cv: m !== 0 ? (sd / Math.abs(m)) * 100 : null,
  };
}

// Abramowitz & Stegun 7.1.26 erf approximation (max error ~1.5e-7)
function erf(x) {
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}
const normalCdf = (z) => 0.5 * (1 + erf(z / Math.sqrt(2)));
// two-tailed p-value from a z/t statistic, normal approximation
// (valid here because every test below has df in the hundreds to thousands,
// where the t-distribution is indistinguishable from the normal)
const pFromZ = (z) => 2 * (1 - normalCdf(Math.abs(z)));
// Wilson-Hilferty approximation: chi-square(df) -> approx normal, valid for
// moderate-to-large df (all uses here have df >= 4, chi2 stat >> df)
function pFromChiSquare(chi2, df) {
  const z = (Math.pow(chi2 / df, 1 / 3) - (1 - 2 / (9 * df))) / Math.sqrt(2 / (9 * df));
  return 1 - normalCdf(z);
}

// Welch's t-test (unequal variance, independent samples)
function welchTTest(a, b) {
  const ma = mean(a), mb = mean(b), va = variance(a), vb = variance(b);
  const na = a.length, nb = b.length;
  const se = Math.sqrt(va / na + vb / nb);
  const t = (ma - mb) / se;
  const df = (va / na + vb / nb) ** 2 / ((va / na) ** 2 / (na - 1) + (vb / nb) ** 2 / (nb - 1));
  return { t, df, p: pFromZ(t), meanA: ma, meanB: mb, nA: na, nB: nb };
}

// Paired-samples t-test (same observation measured twice)
function pairedTTest(a, b) {
  const diffs = a.map((v, i) => v - b[i]);
  const md = mean(diffs), sd = std(diffs), n = diffs.length;
  const t = md / (sd / Math.sqrt(n));
  return { t, df: n - 1, p: pFromZ(t), meanA: mean(a), meanB: mean(b), n };
}

// One-way ANOVA F-test across >2 groups
function oneWayAnova(groups) {
  const all = groups.flat();
  const grandMean = mean(all);
  const k = groups.length, n = all.length;
  const ssBetween = sum(groups.map((g) => g.length * (mean(g) - grandMean) ** 2));
  const ssWithin = sum(groups.map((g) => sum(g.map((x) => (x - mean(g)) ** 2))));
  const df1 = k - 1, df2 = n - k;
  const msBetween = ssBetween / df1, msWithin = ssWithin / df2;
  const F = msBetween / msWithin;
  // large-sample approx: df1*F ~ chi-square(df1) when df2 is large
  const p = pFromChiSquare(F * df1, df1);
  return { F, df1, df2, p };
}

// Pearson correlation
function pearson(x, y) {
  const mx = mean(x), my = mean(y);
  const cov = sum(x.map((xi, i) => (xi - mx) * (y[i] - my)));
  const sx = Math.sqrt(sum(x.map((xi) => (xi - mx) ** 2)));
  const sy = Math.sqrt(sum(y.map((yi) => (yi - my) ** 2)));
  const r = cov / (sx * sy);
  const n = x.length;
  const t = r * Math.sqrt((n - 2) / (1 - r * r));
  return { r, r2Pct: r * r * 100, p: pFromZ(t), n };
}

// Poisson dispersion (variance-to-mean ratio) -- VMR >> 1 indicates
// overdispersion (arrivals bunch into platoons rather than a random stream)
function poissonDispersion(counts) {
  const vmr = variance(counts) / mean(counts);
  const n = counts.length;
  const chi2 = vmr * (n - 1);
  return { vmr, chi2, df: n - 1, p: pFromChiSquare(chi2, n - 1), n };
}

const groupBy = (rows, key) => rows.reduce((acc, r) => {
  (acc[r[key]] = acc[r[key]] || []).push(r);
  return acc;
}, {});

const shortName = (n) => n.replace(' Junction', '').replace(' Roundabout', '').replace(' Intersection', '');

// ---------------------------------------------------------------------------
// Main computation -- takes the three parsed CSVs, returns every stat the
// site displays.
// ---------------------------------------------------------------------------
export function computeTrafficStats(field20, baseline7, incidents) {
  const totalVol = (row) => VEH_COLS.reduce((s, c) => s + row[c], 0);
  field20.forEach((r) => { r.TotalVolume = totalVol(r); });
  baseline7.forEach((r) => { r.TotalVolume = totalVol(r); });

  // --- by-intersection daily volume (field20) ---
  const byIntDate = groupBy(field20, 'Intersection');
  const byIntersection = {};
  Object.entries(byIntDate).forEach(([name, rows]) => {
    const byDate = groupBy(rows, 'Date');
    const dailyTotals = Object.values(byDate).map((dayRows) => sum(dayRows.map((r) => r.TotalVolume)));
    const comp = {};
    VEH_COLS.forEach((c) => { comp[c] = sum(rows.map((r) => r[c])); });
    const compTotal = sum(Object.values(comp));
    const compPct = {};
    VEH_COLS.forEach((c) => { compPct[c] = (comp[c] / compTotal) * 100; });
    byIntersection[name] = {
      meanDailyVolume: mean(dailyTotals),
      stdDailyVolume: std(dailyTotals),
      minDailyVolume: Math.min(...dailyTotals),
      maxDailyVolume: Math.max(...dailyTotals),
      compositionPct: compPct,
      tricycleSharePct: compPct.Tricycles,
    };
  });
  // --- peak-hour vehicle-class rate by intersection (field20, Period=Peak) ---
  // mean 15-min count during peak intervals x 4 = an hourly rate, consistent
  // with the site's existing "veh/hr, peak-hour" framing.
  const peakHourlyByIntersection = {};
  Object.entries(byIntDate).forEach(([name, rows]) => {
    const peakRows = rows.filter((r) => r.Period === 'Peak');
    const entry = {};
    VEH_COLS.forEach((c) => { entry[c] = mean(peakRows.map((r) => r[c])) * 4; });
    entry.Total = VEH_COLS.reduce((s, c) => s + entry[c], 0);
    peakHourlyByIntersection[name] = entry;
  });

  const busiestIntersection = Object.entries(byIntersection).sort((a, b) => b[1].meanDailyVolume - a[1].meanDailyVolume)[0][0];
  const highestTricycleShareIntersection = Object.entries(byIntersection).sort((a, b) => b[1].tricycleSharePct - a[1].tricycleSharePct)[0][0];

  // mean 15-min interval volume by weather condition, per intersection --
  // powers the Overview map's Dry/Wet toggle with real, live-computed values
  Object.entries(byIntDate).forEach(([name, rows]) => {
    const dryRows = rows.filter((r) => r.Weather === 'Dry').map((r) => r.TotalVolume);
    const wetRows = rows.filter((r) => r.Weather === 'Wet (Rain)').map((r) => r.TotalVolume);
    byIntersection[name].meanIntervalVolumeDry = dryRows.length ? mean(dryRows) : null;
    byIntersection[name].meanIntervalVolumeWet = wetRows.length ? mean(wetRows) : null;
  });

  // --- overall composition (field20) ---
  const overallComp = {};
  VEH_COLS.forEach((c) => { overallComp[c] = sum(field20.map((r) => r[c])); });
  const overallCompTotal = sum(Object.values(overallComp));
  const overallCompositionPct = {};
  VEH_COLS.forEach((c) => { overallCompositionPct[c] = (overallComp[c] / overallCompTotal) * 100; });

  const totalVehiclesRecorded = overallCompTotal;
  const sampleSizeIntervals = field20.length;

  // --- hourly profile (field20) ---
  const byHour = groupBy(field20, 'Hour');
  const hourlyProfile = {};
  Object.entries(byHour).forEach(([h, rows]) => { hourlyProfile[h] = mean(rows.map((r) => r.TotalVolume)); });

  // --- weather test (field20) ---
  const dry = field20.filter((r) => r.Weather === 'Dry').map((r) => r.TotalVolume);
  const wet = field20.filter((r) => r.Weather === 'Wet (Rain)').map((r) => r.TotalVolume);
  const weatherTest = welchTTest(wet, dry);
  weatherTest.pctChange = ((weatherTest.meanA - weatherTest.meanB) / weatherTest.meanB) * 100;

  // --- peak vs off-peak (field20, recomputed on the correct/full dataset) ---
  const peak = field20.filter((r) => r.Period === 'Peak').map((r) => r.TotalVolume);
  const offpeak = field20.filter((r) => r.Period === 'Off-Peak').map((r) => r.TotalVolume);
  const peakOffpeakTest = welchTTest(peak, offpeak);
  peakOffpeakTest.ratio = peakOffpeakTest.meanA / peakOffpeakTest.meanB;

  // --- tricycle-volume ANOVA across intersections (field20, recomputed) ---
  const triGroups = Object.values(groupBy(field20, 'Intersection')).map((rows) => rows.map((r) => r.Tricycles));
  const tricycleAnova = oneWayAnova(triGroups);
  const tricycleByIntersection = {};
  Object.entries(groupBy(field20, 'Intersection')).forEach(([name, rows]) => {
    const tri = rows.map((r) => r.Tricycles);
    tricycleByIntersection[name] = { mean: mean(tri), std: std(tri), n: tri.length };
  });

  // --- PCU by headway-ratio method (baseline7 -- has real headway data) ---
  const pcuByIntersection = {};
  Object.entries(groupBy(baseline7, 'Intersection')).forEach(([name, rows]) => {
    const triH = mean(rows.map((r) => r.TriHeadway));
    const carH = mean(rows.map((r) => r.CarHeadway));
    pcuByIntersection[name] = { triHeadway: triH, carHeadway: carH, pcuHeadway: triH / carH, n: rows.length };
  });
  const pcuHeadwayOverall = mean(baseline7.map((r) => r.TriHeadway)) / mean(baseline7.map((r) => r.CarHeadway));

  // --- V/C ratio descriptive stats (baseline7) ---
  const vcValues = baseline7.map((r) => r.VC);
  const vcStats = { mean: mean(vcValues), min: Math.min(...vcValues), max: Math.max(...vcValues), n: vcValues.length };

  // --- V/C <-> tricycle-volume correlation (baseline7) ---
  const volumeVcCorrelation = pearson(baseline7.map((r) => r.Tricycles), baseline7.map((r) => r.VC));
  // raw paired points backing the correlation above, for a scatter chart --
  // every one of the 2,160 recorded intervals, not a summarized subset.
  const volumeVcPairs = baseline7.map((r) => ({ x: r.Tricycles, y: r.VC }));

  // --- day vs night tricycle volume (baseline7) ---
  const dayRows = baseline7.filter((r) => r.Session_Type === 'Day').map((r) => r.Tricycles);
  const nightRows = baseline7.filter((r) => r.Session_Type === 'Night').map((r) => r.Tricycles);
  const dayNightTest = welchTTest(dayRows, nightRows);

  // --- headway paired t-test (baseline7) ---
  const headwayTest = pairedTTest(baseline7.map((r) => r.TriHeadway), baseline7.map((r) => r.CarHeadway));

  // --- Poisson dispersion / platooning (baseline7) ---
  const poissonNetwork = poissonDispersion(baseline7.map((r) => r.Tricycles));
  const poissonByIntersection = {};
  Object.entries(groupBy(baseline7, 'Intersection')).forEach(([name, rows]) => {
    poissonByIntersection[name] = poissonDispersion(rows.map((r) => r.Tricycles));
  });

  // --- incident severity x type crosstab (real, unmodified) ---
  const incidentSeverityByType = {};
  incidents.forEach((r) => {
    incidentSeverityByType[r.IncidentType] = incidentSeverityByType[r.IncidentType] || { Fatal: 0, Serious: 0, Minor: 0 };
    incidentSeverityByType[r.IncidentType][r.Severity] = (incidentSeverityByType[r.IncidentType][r.Severity] || 0) + 1;
  });
  const incidentTotalsByType = {};
  incidents.forEach((r) => { incidentTotalsByType[r.IncidentType] = (incidentTotalsByType[r.IncidentType] || 0) + 1; });
  // overall severity totals, summed across every incident type -- powers a
  // single network-wide severity Pie
  const incidentSeverityTotals = { Fatal: 0, Serious: 0, Minor: 0 };
  incidents.forEach((r) => { incidentSeverityTotals[r.Severity] = (incidentSeverityTotals[r.Severity] || 0) + 1; });

  // ---------------------------------------------------------------------
  // Extended aggregates -- support the Analytics tab's extended chart
  // gallery. Every value below is a live derivation of field20 / baseline7 /
  // incidents, computed the same way as everything above.
  // ---------------------------------------------------------------------

  // --- descriptive statistics: Total Volume (field20), PCU ratio & V/C
  //     ratio (baseline7, per-interval) ---
  const totalVolumeDescribe = describe(field20.map((r) => r.TotalVolume));
  const pcuRatioValues = baseline7.map((r) => r.TriHeadway / r.CarHeadway);
  const pcuRatioDescribe = describe(pcuRatioValues);
  const vcRatioDescribe = describe(vcValues);

  // --- histogram of Total Volume across all 6,400 field20 intervals, binned
  //     into 10 equal-width bins spanning the observed min-max range ---
  const totalVolumeHistogram = (() => {
    const { min, max } = totalVolumeDescribe;
    const binCount = 10;
    const width = (max - min) / binCount || 1;
    const bins = Array.from({ length: binCount }, (_, i) => ({
      binStart: min + i * width, binEnd: min + (i + 1) * width, count: 0,
    }));
    field20.forEach((r) => {
      const idx = Math.min(binCount - 1, Math.floor((r.TotalVolume - min) / width));
      bins[Math.max(0, idx)].count += 1;
    });
    return bins;
  })();

  // --- hourly volume profile, per intersection (field20) ---
  const hourlyProfileByIntersection = {};
  Object.entries(byIntDate).forEach(([name, rows]) => {
    const byHourSite = groupBy(rows, 'Hour');
    const entry = {};
    Object.entries(byHourSite).forEach(([h, hRows]) => { entry[h] = mean(hRows.map((r) => r.TotalVolume)); });
    hourlyProfileByIntersection[name] = entry;
  });

  // --- day vs night tricycle volume, per intersection (baseline7) ---
  const dayNightByIntersection = {};
  Object.entries(groupBy(baseline7, 'Intersection')).forEach(([name, rows]) => {
    const d = rows.filter((r) => r.Session_Type === 'Day').map((r) => r.Tricycles);
    const nt = rows.filter((r) => r.Session_Type === 'Night').map((r) => r.Tricycles);
    dayNightByIntersection[name] = { dayMean: mean(d), nightMean: mean(nt), dayN: d.length, nightN: nt.length };
  });

  // --- V/C ratio descriptive stats, per intersection (baseline7) ---
  const vcByIntersection = {};
  Object.entries(groupBy(baseline7, 'Intersection')).forEach(([name, rows]) => {
    const vc = rows.map((r) => r.VC);
    vcByIntersection[name] = { mean: mean(vc), std: std(vc), min: Math.min(...vc), max: Math.max(...vc), n: vc.length };
  });

  // --- vehicle-class composition, by weather condition (field20) ---
  const compositionByWeather = {};
  ['Dry', 'Wet (Rain)'].forEach((w) => {
    const rows = field20.filter((r) => r.Weather === w);
    const comp = {};
    VEH_COLS.forEach((c) => { comp[c] = sum(rows.map((r) => r[c])); });
    const total = sum(Object.values(comp));
    const pct = {};
    VEH_COLS.forEach((c) => { pct[c] = total ? (comp[c] / total) * 100 : 0; });
    compositionByWeather[w === 'Dry' ? 'Dry' : 'Wet'] = pct;
  });

  // --- peak-hour network composition (sum of peakHourlyByIntersection
  //     across all 5 sites, per vehicle class) ---
  const peakNetworkComposition = {};
  VEH_COLS.forEach((c) => { peakNetworkComposition[c] = sum(Object.values(peakHourlyByIntersection).map((v) => v[c])); });

  // --- PCU ratio (per-interval) <-> V/C ratio correlation (baseline7) --
  //     does a locally larger tricycle/car headway ratio track with a
  //     locally busier V/C ratio? Same Pearson method as volumeVcCorrelation.
  const pcuVcCorrelation = pearson(pcuRatioValues, vcValues);
  const pcuVcPairs = baseline7.map((r) => ({ x: r.TriHeadway / r.CarHeadway, y: r.VC }));

  return {
    byIntersection, peakHourlyByIntersection, busiestIntersection, highestTricycleShareIntersection,
    overallCompositionPct, totalVehiclesRecorded, sampleSizeIntervals, hourlyProfile,
    weatherTest, peakOffpeakTest, tricycleAnova, tricycleByIntersection,
    pcuByIntersection, pcuHeadwayOverall, vcStats, volumeVcCorrelation, volumeVcPairs, dayNightTest,
    headwayTest, poissonNetwork, poissonByIntersection,
    incidentSeverityByType, incidentTotalsByType, incidentSeverityTotals, incidentN: incidents.length,
    totalVolumeDescribe, pcuRatioDescribe, vcRatioDescribe, totalVolumeHistogram,
    hourlyProfileByIntersection, dayNightByIntersection, vcByIntersection,
    compositionByWeather, peakNetworkComposition, pcuVcCorrelation, pcuVcPairs,
    shortName,
  };
}

// ---------------------------------------------------------------------------
// Human-readable formulas + data-source notes, shown in the UI's
// "Methodology" panels so every figure's workflow is visible, not just its
// result.
// ---------------------------------------------------------------------------
export const DATA_SOURCES = {
  field20: '20-day field count (2026-06-01 to 2026-06-20), 5 intersections, 06:00-21:45, 6,400 fifteen-minute intervals. Vehicle-class counts + weather condition.',
  baseline7: '7-day baseline field count, 5 intersections, day + night sessions, 2,160 fifteen-minute intervals (336/site day, 96/site night). Vehicle-class counts + per-interval headway + V/C ratio.',
  incidents: '840 recorded traffic-incident records across the Kampala road network, with incident type and severity.',
};

export const FORMULAS = {
  meanDailyVolume: { formula: 'sum(Cars + Boda_bodas + Tricycles + Minibuses + Heavy_Trucks) per calendar day, averaged across the 20 observed days', source: 'field20', n: '20 days/site' },
  peakHourly: { formula: 'mean(class count) over Period=Peak intervals × 4, per intersection', source: 'field20', n: '400 peak intervals/site' },
  compositionPct: { formula: 'class_total ÷ sum(all 5 class totals) × 100', source: 'field20', n: '6,400 intervals' },
  totalVehiclesRecorded: { formula: 'sum of every vehicle-class count across all recorded intervals', source: 'field20', n: '6,400 intervals' },
  weatherTest: { formula: "Welch's two-sample t-test, Total Volume for Weather=Wet vs Weather=Dry", source: 'field20', n: '399 wet / 6,001 dry' },
  peakOffpeakTest: { formula: "Welch's two-sample t-test, Total Volume for Period=Peak (07-09h,16-19h) vs Off-Peak", source: 'field20', n: '2,000 peak / 4,400 off-peak' },
  tricycleAnova: { formula: 'One-way ANOVA, Tricycles per interval across the 5 intersections: F = MS_between ÷ MS_within', source: 'field20', n: '1,280/site, 6,400 total' },
  pcuHeadway: { formula: 'PCU = mean(Avg Tricycle Headway, s) ÷ mean(Avg Car Headway, s) — standard headway-ratio equivalency method', source: 'baseline7', n: '432 intervals/site, 2,160 total' },
  vcStats: { formula: 'Mean / min / max of the recorded V/C Ratio field, per interval', source: 'baseline7', n: '2,160' },
  volumeVcCorrelation: { formula: 'Pearson correlation, Tricycles per interval vs V/C Ratio: r = cov(x,y) ÷ (σx·σy)', source: 'baseline7', n: '2,160' },
  dayNightTest: { formula: "Welch's two-sample t-test, Tricycles per interval, Session=Day (07:00-19:00) vs Session=Night (19:00-07:00)", source: 'baseline7', n: '1,680 day / 480 night' },
  headwayTest: { formula: 'Paired-samples t-test, Avg Tricycle Headway (s) vs Avg Car Headway (s) recorded on the same interval', source: 'baseline7', n: '2,160' },
  poissonDispersion: { formula: 'Variance-to-mean ratio (VMR) of Tricycles per interval; VMR ≫ 1 indicates arrivals bunch into platoons rather than a random Poisson stream', source: 'baseline7', n: '2,160 network-wide' },
  incidentSeverity: { formula: 'Cross-tabulation of IncidentType × Severity, direct counts', source: 'incidents', n: '840' },
  descriptiveStats: { formula: 'mean / median / mode / std / Q1 / Q3 / IQR / coefficient of variation, computed directly from the full array of per-interval values (linear-interpolation quantiles)', source: 'field20 / baseline7', n: 'varies — stated per panel' },
  pcuVcCorrelation: { formula: 'Pearson correlation, per-interval PCU ratio (Avg Tricycle Headway ÷ Avg Car Headway) vs V/C Ratio: r = cov(x,y) ÷ (σx·σy)', source: 'baseline7', n: '2,160' },
  hourlyProfileByIntersection: { formula: 'Mean Total Volume per 15-min interval, grouped by Hour, computed separately within each intersection', source: 'field20', n: '~80 intervals/hour/site' },
  dayNightByIntersection: { formula: 'Mean Tricycles per interval, Session=Day vs Session=Night, computed separately within each intersection', source: 'baseline7', n: '336 day / 96 night per site' },
  compositionByWeather: { formula: 'class_total ÷ sum(all 5 class totals) × 100, computed separately for Weather=Dry and Weather=Wet intervals', source: 'field20', n: '6,001 dry / 399 wet' },
  incidentSeverityTotals: { formula: 'Count of Severity=Fatal / Serious / Minor, summed across all incident types', source: 'incidents', n: '840' },
  totalVolumeHistogram: { formula: '10 equal-width bins spanning the observed min-max range of Total Volume per interval, counts per bin', source: 'field20', n: '6,400' },
};

// ---------------------------------------------------------------------------
// Fetch + parse both datasets and compute stats. Cached at module scope so
// every tab that mounts this hook in the same page session only fetches once.
// ---------------------------------------------------------------------------
let cachedPromise = null;
export function loadTrafficStats(baseUrl) {
  if (!cachedPromise) {
    cachedPromise = Promise.all([
      fetch(`${baseUrl}data/field20.csv`).then((r) => r.text()),
      fetch(`${baseUrl}data/baseline7.csv`).then((r) => r.text()),
      fetch(`${baseUrl}data/incidents.csv`).then((r) => r.text()),
    ]).then(([f20, b7, inc]) => computeTrafficStats(parseCsv(f20), parseCsv(b7), parseCsv(inc)));
  }
  return cachedPromise;
}
