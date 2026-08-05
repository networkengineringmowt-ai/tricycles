import React, { useState, useEffect } from 'react';
import { 
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, 
  BarElement, RadialLinearScale, ArcElement, Filler, Tooltip, Legend 
} from 'chart.js';
import { Radar, Line, Bar, Doughnut, Scatter } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, 
  BarElement, RadialLinearScale, ArcElement, Filler, Tooltip, Legend
);

const InfographicDashboard = () => {
  // Advanced Diagnostics State
  const [vcRatio, setVcRatio] = useState(0.85);
  const [modalShare, setModalShare] = useState(15);
  const [roadWidth, setRoadWidth] = useState(7.0);

  // Dynamic calculations based on state
  const basePcu = 1.35;
  const vcPenalty = (vcRatio - 0.5) > 0 ? (vcRatio - 0.5) * 0.8 : 0;
  const modalPenalty = (modalShare - 5) * 0.02;
  const widthBonus = (roadWidth - 7.0) * -0.05;
  const dynamicPcu = (basePcu + vcPenalty + modalPenalty + widthBonus).toFixed(2);
  const capacityDrop = Math.round((dynamicPcu - 1.0) * 100);

  // Animations config for all charts
  const animConfig = { duration: 1500, easing: 'easeOutQuart' };

  // Heatmap generation arrays
  const vcRatios = [0.2, 0.4, 0.6, 0.8, 1.0];
  const modalShares = [0.05, 0.10, 0.15, 0.20, 0.25];

  // Simulated live telemetry numbers
  const [liveVehicles, setLiveVehicles] = useState(6402);
  useEffect(() => {
    const timer = setInterval(() => setLiveVehicles(v => v + Math.floor(Math.random() * 3) - 1), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="workspace-grid">
      <div className="col-span-12" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <p className="nexus-eyebrow">ADVANCED ANALYTICS COMMAND CENTER</p>
        <h2 className="text-primary" style={{ fontSize: '2.5rem' }}>Microscopic Traffic Diagnostics</h2>
      </div>

      {/* MACRO TELEMETRY STRIP */}
      <div className="col-span-12" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '16px' }}>
        <div className="glass-card" style={{ padding: '16px', borderTop: '2px solid #00f2ff', textAlign: 'center' }}>
          <p className="stat-label">Network Flow State</p>
          <div className="stat-value text-primary" style={{ fontSize: '1.5rem' }}>SATURATED</div>
          <p className="text-muted" style={{ fontSize: '0.7rem' }}>LOS E Detected</p>
        </div>
        <div className="glass-card" style={{ padding: '16px', borderTop: '2px solid #10b981', textAlign: 'center' }}>
          <p className="stat-label">Live Active Vehicles</p>
          <div className="stat-value" style={{ fontSize: '1.5rem', color: '#10b981' }}>{liveVehicles.toLocaleString()}</div>
          <p className="text-muted" style={{ fontSize: '0.7rem' }}>±1.2% variance</p>
        </div>
        <div className="glass-card" style={{ padding: '16px', borderTop: '2px solid #f59e0b', textAlign: 'center' }}>
          <p className="stat-label">Mean Network Delay</p>
          <div className="stat-value" style={{ fontSize: '1.5rem', color: '#f59e0b' }}>142.5s</div>
          <p className="text-muted" style={{ fontSize: '0.7rem' }}>Per Intersection</p>
        </div>
        <div className="glass-card" style={{ padding: '16px', borderTop: '2px solid #ef4444', textAlign: 'center', animation: vcRatio > 0.9 ? 'pulse 2s infinite' : 'none' }}>
          <p className="stat-label">Critical V/C Ratio</p>
          <div className="stat-value" style={{ fontSize: '1.5rem', color: vcRatio > 0.9 ? '#ef4444' : '#fff' }}>{vcRatio.toFixed(2)}</div>
          <p className="text-muted" style={{ fontSize: '0.7rem' }}>Wandegeya Node</p>
        </div>
        <div className="glass-card" style={{ padding: '16px', borderTop: '2px solid #3b82f6', textAlign: 'center' }}>
          <p className="stat-label">Tricycle Share</p>
          <div className="stat-value" style={{ fontSize: '1.5rem', color: '#3b82f6' }}>{modalShare}%</div>
          <p className="text-muted" style={{ fontSize: '0.7rem' }}>System Average</p>
        </div>
        <div className="glass-card" style={{ padding: '16px', borderTop: '2px solid #8b5cf6', textAlign: 'center' }}>
          <p className="stat-label">Economic Delay Cost</p>
          <div className="stat-value" style={{ fontSize: '1.5rem', color: '#8b5cf6' }}>$1.5M</div>
          <p className="text-muted" style={{ fontSize: '0.7rem' }}>Daily Est. GKMA</p>
        </div>
        <div className="glass-card" style={{ padding: '16px', borderTop: '2px solid #a855f7', textAlign: 'center' }}>
          <p className="stat-label">Excess CO2</p>
          <div className="stat-value" style={{ fontSize: '1.5rem', color: '#a855f7' }}>+12.4%</div>
          <p className="text-muted" style={{ fontSize: '0.7rem' }}>Due to Weaving</p>
        </div>
      </div>

      {/* MULTI-VARIABLE DIAGNOSTIC ENGINE */}
      <div className="glass-card col-span-4" style={{ display: 'flex', flexDirection: 'column' }}>
        <p className="nexus-eyebrow">DYNAMIC SIMULATOR</p>
        <h3>Stochastic PCU Calculator</h3>
        
        <div style={{ marginTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="text-muted">Volume/Capacity (V/C)</span>
            <span className="text-primary" style={{ fontWeight: 'bold' }}>{vcRatio.toFixed(2)}</span>
          </div>
          <input type="range" min="0.2" max="1.2" step="0.05" value={vcRatio} onChange={(e) => setVcRatio(parseFloat(e.target.value))} className="custom-slider" />
        </div>

        <div style={{ marginTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="text-muted">Tricycle Modal Share (%)</span>
            <span className="text-primary" style={{ fontWeight: 'bold' }}>{modalShare}%</span>
          </div>
          <input type="range" min="2" max="30" step="1" value={modalShare} onChange={(e) => setModalShare(parseInt(e.target.value))} className="custom-slider" />
        </div>

        <div style={{ marginTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span className="text-muted">Effective Road Width (m)</span>
            <span className="text-primary" style={{ fontWeight: 'bold' }}>{roadWidth.toFixed(1)}m</span>
          </div>
          <input type="range" min="6.0" max="9.0" step="0.1" value={roadWidth} onChange={(e) => setRoadWidth(parseFloat(e.target.value))} className="custom-slider" />
        </div>

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '24px' }}>
          <div style={{ textAlign: 'center', padding: '20px', background: 'rgba(0,242,255,0.05)', border: '1px solid #00f2ff', borderRadius: '50%', width: '180px', height: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', boxShadow: '0 0 30px rgba(0,242,255,0.2)' }}>
            <span className="text-muted" style={{ fontSize: '0.8rem', letterSpacing: '1px' }}>LIVE PCU</span>
            <span className="text-primary" style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1' }}>{dynamicPcu}</span>
            <span style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '8px' }}><i className="fa-solid fa-arrow-up"></i> {capacityDrop}% Impact</span>
          </div>
        </div>
      </div>

      {/* MONTE CARLO DELAY SIMULATION (NEW) */}
      <div className="glass-card col-span-8">
        <p className="nexus-eyebrow">STOCHASTIC MONTE CARLO ANALYSIS</p>
        <h3>Intersection Delay by Tricycle PCU Profile</h3>
        <div style={{ flex: 1, minHeight: '320px', position: 'relative', width: '100%' }}>
          <Line 
            data={{
              labels: ['V/C 0.6', 'V/C 0.7', 'V/C 0.8', 'V/C 0.9', 'V/C 1.0', 'V/C 1.1'],
              datasets: [
                {
                  label: 'Baseline (PCU 1.0)',
                  data: [46, 62, 97, 373, 1994, 1948],
                  borderColor: '#94a3b8',
                  backgroundColor: 'rgba(148, 163, 184, 0.1)',
                  borderWidth: 2,
                  tension: 0.4
                },
                {
                  label: 'Empirical Tricycle (PCU 1.35)',
                  data: [51, 76, 176, 1803, 2075, 1901],
                  borderColor: '#00f2ff',
                  backgroundColor: 'rgba(0, 242, 255, 0.1)',
                  borderWidth: 3,
                  fill: true,
                  tension: 0.4
                },
                {
                  label: 'Severe Weather/Rain (PCU 1.5)',
                  data: [54, 84, 279, 2228, 2623, 1915],
                  borderColor: '#ef4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderWidth: 2,
                  borderDash: [5, 5],
                  tension: 0.4
                }
              ]
            }}
            options={{
              animation: animConfig,
              maintainAspectRatio: false,
              scales: {
                y: { title: { display: true, text: 'Delay (Seconds / Veh)', color: '#94a3b8' }, grid: { color: '#2a2a2a' } },
                x: { grid: { display: false } }
              },
              plugins: { legend: { labels: { color: '#f1f5f9' } } }
            }}
          />
        </div>
      </div>

      {/* SAFETY IMPACT ANALYSIS (NEW) */}
      <div className="glass-card col-span-6">
        <p className="nexus-eyebrow">SAFETY ANALYSIS (N=840 INCIDENTS)</p>
        <h3>Incident Severity by Type in Tricycle Corridors</h3>
        <div style={{ flex: 1, minHeight: '280px', position: 'relative', width: '100%' }}>
          <Bar 
            data={{
              labels: ['Rollover', 'Pedestrian', 'Moto Crash', 'Rear-End', 'Single Veh', 'Side-swipe'],
              datasets: [
                {
                  label: 'Fatal',
                  data: [25, 45, 30, 15, 20, 12],
                  backgroundColor: '#ef4444'
                },
                {
                  label: 'Serious',
                  data: [40, 30, 35, 30, 25, 25],
                  backgroundColor: '#f59e0b'
                },
                {
                  label: 'Minor',
                  data: [40, 15, 23, 42, 40, 46],
                  backgroundColor: '#10b981'
                }
              ]
            }}
            options={{
              animation: animConfig,
              maintainAspectRatio: false,
              scales: {
                x: { stacked: true, grid: { display: false } },
                y: { stacked: true, grid: { color: '#2a2a2a' } }
              },
              plugins: { legend: { labels: { color: '#f1f5f9' } } }
            }}
          />
        </div>
      </div>

      {/* WEAVING SCATTER PLOT */}
      <div className="glass-card col-span-6">
        <p className="nexus-eyebrow">MICROSCOPIC BEHAVIOR</p>
        <h3>Tricycle Speed vs Network Density</h3>
        <div style={{ flex: 1, minHeight: '280px', position: 'relative', width: '100%' }}>
          <Scatter 
            data={{
              datasets: [
                {
                  label: 'Free Flow State',
                  data: Array.from({length: 40}, () => ({x: Math.random()*30 + 10, y: Math.random()*15 + 30})),
                  backgroundColor: '#10b981'
                },
                {
                  label: 'Forced Flow (Weaving)',
                  data: Array.from({length: 60}, () => ({x: Math.random()*60 + 40, y: Math.random()*20 + 5})),
                  backgroundColor: '#00f2ff'
                }
              ]
            }}
            options={{
              animation: animConfig,
              maintainAspectRatio: false,
              scales: {
                x: { title: { display: true, text: 'Density (Veh/km)', color: '#94a3b8' }, grid: { color: '#2a2a2a' } },
                y: { title: { display: true, text: 'Speed (km/h)', color: '#94a3b8' }, grid: { color: '#2a2a2a' } }
              },
              plugins: { legend: { labels: { color: '#f1f5f9' } } }
            }}
          />
        </div>
      </div>

      {/* CAUSAL DOUGHNUT */}
      <div className="glass-card col-span-4">
        <p className="nexus-eyebrow">CAUSAL FACTORS</p>
        <h3>Weaving Triggers</h3>
        <div style={{ flex: 1, minHeight: '250px', position: 'relative', width: '100%', marginTop: '20px' }}>
          <Doughnut 
            data={{
              labels: ['Passenger Alighting', 'Pothole Evasion', 'Boda Conflict', 'Police Avoidance'],
              datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: ['#00f2ff', '#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 0,
                hoverOffset: 10
              }]
            }}
            options={{
              animation: animConfig,
              maintainAspectRatio: false,
              cutout: '70%',
              plugins: { legend: { position: 'bottom', labels: { color: '#f1f5f9', padding: 15, font: { size: 10 } } } }
            }}
          />
        </div>
      </div>

      {/* RADAR CHART */}
      <div className="glass-card col-span-4">
        <p className="nexus-eyebrow">PERFORMANCE VECTORS</p>
        <h3>Flow Impact Profile</h3>
        <div style={{ flex: 1, minHeight: '250px', position: 'relative', width: '100%', marginTop: '20px' }}>
          <Radar 
            data={{
              labels: ['Space', 'Speed', 'Weaving', 'Headway', 'Delay'],
              datasets: [
                { label: 'Car', data: [1.0, 1.0, 0.4, 0.9, 0.8], borderColor: '#94a3b8', backgroundColor: 'rgba(148, 163, 184, 0.2)' },
                { label: 'Tricycle', data: [0.6, 0.7, 1.5, 1.4, 1.3], borderColor: '#00f2ff', backgroundColor: 'rgba(0, 242, 255, 0.2)' }
              ]
            }}
            options={{
              animation: animConfig,
              maintainAspectRatio: false,
              scales: { r: { grid: { color: '#2a2a2a' }, angleLines: { color: '#2a2a2a' }, ticks: { display: false } } },
              plugins: { legend: { position: 'bottom', labels: { color: '#f1f5f9', font: { size: 10 } } } }
            }}
          />
        </div>
      </div>
      
      {/* HEATMAP / PREDICTIVE MODELING (Moved to 4 col to complete 12 col row) */}
      <div className="glass-card col-span-4">
        <p className="nexus-eyebrow">PREDICTIVE MATRIX</p>
        <h3>Multivariate PCU Matrix (Modal Share vs V/C)</h3>
        <div style={{ flex: 1, minHeight: '250px', position: 'relative', overflowX: 'auto', marginTop: '16px' }}>
          <table className="heatmap-table" style={{ width: '100%', height: '100%', fontSize: '0.85rem' }}>
            <thead>
              <tr>
                <th>V/C</th>
                {modalShares.map(ms => <th key={ms}>{ms * 100}%</th>)}
              </tr>
            </thead>
            <tbody>
              {vcRatios.map(vc => (
                <tr key={vc}>
                  <td style={{ fontWeight: 'bold' }}>{vc}</td>
                  {modalShares.map(ms => {
                    const pcu = (1.1 + (vc * 0.4) + (ms * 1.2)).toFixed(2);
                    const opacity = (pcu - 1.1) / 1.0;
                    return (
                      <td key={ms} style={{ background: `rgba(0, 242, 255, ${opacity})`, color: opacity > 0.5 ? '#000' : '#fff', transition: 'all 0.3s' }}>
                        {pcu}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* NEW FUNDAMENTAL DIAGRAM (GREENSHIELDS) */}
      <div className="glass-card col-span-6">
        <p className="nexus-eyebrow">MACROSCOPIC FLOW PHYSICS</p>
        <h3>Greenshields Fundamental Diagram</h3>
        <div style={{ flex: 1, minHeight: '280px', position: 'relative', width: '100%' }}>
          <Line 
            data={{
              labels: [0, 6.8, 13.7, 20.5, 27.4, 34.2, 41.1, 47.9, 54.7, 61.6, 68.4, 75.3, 82.1, 88.9, 95.8, 102.6, 109.5, 116.3, 123.2, 130.0],
              datasets: [
                {
                  label: 'Standard Traffic (q_max = 1798)',
                  data: [0, 387, 727, 1020, 1267, 1467, 1620, 1726, 1786, 1798, 1764, 1683, 1555, 1381, 1159, 891, 576, 214, 0, 0],
                  borderColor: '#94a3b8',
                  borderWidth: 2,
                  tension: 0.4
                },
                {
                  label: '20% Tricycles (q_max = 1068)',
                  data: [0, 285, 527, 724, 876, 985, 1049, 1068, 1043, 974, 861, 703, 501, 255, 0, 0, 0, 0, 0, 0],
                  borderColor: '#ef4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  borderWidth: 3,
                  fill: true,
                  tension: 0.4
                }
              ]
            }}
            options={{
              animation: animConfig,
              maintainAspectRatio: false,
              scales: {
                x: { title: { display: true, text: 'Density (Veh/km)', color: '#94a3b8' }, grid: { display: false } },
                y: { title: { display: true, text: 'Flow (Veh/hr)', color: '#94a3b8' }, grid: { color: '#2a2a2a' } }
              },
              plugins: { legend: { labels: { color: '#f1f5f9' } } }
            }}
          />
        </div>
      </div>

      {/* SHOCKWAVE PROFILE */}
      <div className="glass-card col-span-6">
        <p className="nexus-eyebrow">KINEMATIC WAVE THEORY (LWR)</p>
        <h3>Backward Shockwave Velocity (Stop-and-Go)</h3>
        <div style={{ flex: 1, minHeight: '280px', position: 'relative', width: '100%' }}>
          <Line 
            data={{
              labels: ['0s', '10s', '20s', '30s', '40s', '50s', '60s'],
              datasets: [
                {
                  label: 'Queue Length (meters)',
                  data: [0, 51, 102, 153, 205, 256, 307],
                  borderColor: '#00f2ff',
                  backgroundColor: 'rgba(0, 242, 255, 0.1)',
                  borderWidth: 3,
                  fill: true,
                  tension: 0.1
                }
              ]
            }}
            options={{
              animation: animConfig,
              maintainAspectRatio: false,
              scales: {
                x: { title: { display: true, text: 'Time since Tricycle stop (seconds)', color: '#94a3b8' }, grid: { display: false } },
                y: { title: { display: true, text: 'Queue Platoon Length (meters)', color: '#94a3b8' }, grid: { color: '#2a2a2a' } }
              },
              plugins: { legend: { labels: { color: '#f1f5f9' } } }
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default InfographicDashboard;
