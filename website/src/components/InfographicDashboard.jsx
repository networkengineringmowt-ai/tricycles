import React, { useState } from 'react';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const InfographicDashboard = () => {
  const [vcRatio, setVcRatio] = useState(0.5);

  const adjustedPcu = (1.35 * (1 + (vcRatio - 0.5) * 0.4)).toFixed(2);

  // Heatmap generation
  const vcRatios = [0.2, 0.4, 0.6, 0.8, 1.0];
  const modalShares = [0.05, 0.10, 0.15, 0.20];

  return (
    <div className="workspace-grid">
      <div className="col-span-12" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <p className="nexus-eyebrow">ADVANCED ANALYTICS MODULE</p>
        <h2 className="text-primary" style={{ fontSize: '2.5rem' }}>PCU Sensitivity & Diagnostics</h2>
      </div>

      {/* PCU Sensitivity Analysis */}
      <div className="glass-card col-span-4">
        <p className="nexus-eyebrow">DIAGNOSTIC MODULE</p>
        <h3>Congestion Sensitivity Analysis</h3>
        <p className="text-muted" style={{ fontSize: '0.9rem' }}>Adjust V/C Ratio to simulate flow collapse:</p>
        <input 
          type="range" 
          min="0.2" max="1.0" step="0.1" 
          value={vcRatio} 
          onChange={(e) => setVcRatio(parseFloat(e.target.value))}
          className="custom-slider" 
        />
        <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          <div className="stat-box" style={{ flex: 1 }}>
            <div className="stat-value" style={{ fontSize: '1.8rem' }}>{vcRatio.toFixed(1)}</div>
            <div className="stat-label">V/C Ratio</div>
          </div>
          <div className="stat-box" style={{ flex: 1 }}>
            <div className="stat-value text-primary" style={{ fontSize: '1.8rem' }}>{adjustedPcu}</div>
            <div className="stat-label">Adjusted PCU</div>
          </div>
        </div>
      </div>

      {/* Impact Radar Chart */}
      <div className="glass-card col-span-4">
        <p className="nexus-eyebrow">PERFORMANCE VECTORS</p>
        <h3>Saturation Flow Impact</h3>
        <div style={{ height: '250px' }}>
          <Radar 
            data={{
              labels: ['Maneuverability', 'Road Space', 'Headway Disruption', 'Speed Consistency', 'Weaving Impact'],
              datasets: [
                {
                  label: 'Passenger Car',
                  data: [0.8, 1.0, 0.9, 1.0, 0.4],
                  borderColor: '#94a3b8',
                  backgroundColor: 'rgba(148, 163, 184, 0.2)'
                },
                {
                  label: 'Tricycle',
                  data: [0.95, 0.6, 1.4, 0.7, 1.5],
                  borderColor: '#00f2ff',
                  backgroundColor: 'rgba(0, 242, 255, 0.2)'
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              scales: { r: { grid: { color: '#2a2a2a' }, angleLines: { color: '#2a2a2a' }, ticks: { display: false } } },
              plugins: { legend: { labels: { color: '#f1f5f9', font: { size: 10 } } } }
            }}
          />
        </div>
      </div>

      {/* Qualitative Data Summary */}
      <div className="glass-card col-span-4" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <p className="nexus-eyebrow">VALIDATION METRICS</p>
          <h3>Statistical Validity</h3>
        </div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <div className="stat-box" style={{ flex: 1, padding: '12px' }}>
            <div className="stat-value text-primary" style={{ fontSize: '1.4rem' }}>&lt;0.05</div>
            <div className="stat-label" style={{ fontSize: '0.65rem' }}>ANOVA</div>
          </div>
          <div className="stat-box" style={{ flex: 1, padding: '12px' }}>
            <div className="stat-value text-accent" style={{ fontSize: '1.4rem' }}>&lt;0.001</div>
            <div className="stat-label" style={{ fontSize: '0.65rem' }}>Poisson \chi²</div>
          </div>
          <div className="stat-box" style={{ flex: 1, padding: '12px' }}>
            <div className="stat-value text-primary" style={{ fontSize: '1.4rem' }}>6,400</div>
            <div className="stat-label" style={{ fontSize: '0.65rem' }}>Samples</div>
          </div>
        </div>
        <p className="text-muted" style={{ fontSize: '0.85rem' }}>
          Primary quantitative tests validate the capacity collapse. Our <span className="text-primary">qualitative field interviews</span> (N=50) confirm the behavioral drivers behind these anomalies.
        </p>
      </div>

      {/* PCU Heatmap */}
      <div className="glass-card col-span-12">
        <p className="nexus-eyebrow">PREDICTIVE MODELING</p>
        <h3>Multivariate PCU Matrix (Modal Share vs V/C)</h3>
        <div style={{ overflowX: 'auto', marginTop: '16px' }}>
          <table className="heatmap-table">
            <thead>
              <tr>
                <th>V/C \ Modal %</th>
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
                      <td key={ms} style={{ background: `rgba(0, 242, 255, ${opacity})`, color: opacity > 0.5 ? '#000' : '#fff' }}>
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

    </div>
  );
};

export default InfographicDashboard;
