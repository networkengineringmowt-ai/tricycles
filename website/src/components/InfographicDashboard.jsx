import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, RadialLinearScale, Filler, Tooltip, Legend } from 'chart.js';
import { Bar, Line, Pie, Radar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, RadialLinearScale, Filler, Tooltip, Legend);

// Fix Leaflet default marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const studySites = [
  { name: "Wandegeya Junction", coords: [0.3308, 32.5744], pcu: 1.35, adt: 103899, interaction: "Tricycle-Boda-NMT" },
  { name: "Kibuye Roundabout", coords: [0.2981, 32.5761], pcu: 1.41, adt: 85000, interaction: "Tricycle-Car (Expressway Exit)" },
  { name: "Bakuli Intersection", coords: [0.3114, 32.5669], pcu: 1.32, adt: 65000, interaction: "Tricycle-Bus (Hub)" },
  { name: "Bwaise Junction", coords: [0.3458, 32.5611], pcu: 1.45, adt: 45000, interaction: "Tricycle-NMT (Flood Zone)" },
  { name: "Natete Junction", coords: [0.3014, 32.5469], pcu: 1.36, adt: 72000, interaction: "Tricycle-PSV Hub" }
];

const InfographicDashboard = () => {
  const [vcRatio, setVcRatio] = useState(0.5);
  const [selectedSite, setSelectedSite] = useState(null);

  const adjustedPcu = (1.35 * (1 + (vcRatio - 0.5) * 0.4)).toFixed(2);

  // Heatmap generation
  const vcRatios = [0.2, 0.4, 0.6, 0.8, 1.0];
  const modalShares = [0.05, 0.10, 0.15, 0.20];

  return (
    <div id="dashboard" className="workspace-grid">
      
      {/* Dynamic Map Card */}
      <div className="glass-card col-span-8">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p className="nexus-eyebrow">GEOSPATIAL DEPLOYMENT CONSOLE</p>
            <h3>Interactive Case Study Map</h3>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn active"><i className="fa-solid fa-sun" style={{marginRight: '6px'}}></i>Dry</button>
            <button className="btn"><i className="fa-solid fa-cloud-showers-heavy" style={{marginRight: '6px'}}></i>Wet</button>
          </div>
        </div>
        <div style={{ height: '400px', borderRadius: '8px', overflow: 'hidden', margin: '15px 0', border: '1px solid var(--border-color)' }}>
          <MapContainer center={[0.3163, 32.5811]} zoom={13} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; OpenStreetMap &copy; CARTO'
            />
            {studySites.map((site, idx) => (
              <Marker 
                key={idx} 
                position={site.coords}
                eventHandlers={{ click: () => setSelectedSite(site) }}
              >
                <Popup>
                  <strong style={{color: '#000'}}>{site.name}</strong><br/>
                  <span style={{color: '#333'}}>PCU: {site.pcu}</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Site Details Sidebar */}
      <div className="glass-card col-span-4">
        <p className="nexus-eyebrow">SITE TELEMETRY</p>
        <h3>{selectedSite ? selectedSite.name : 'Select a node'}</h3>
        {selectedSite ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <div className="stat-box" style={{ padding: '12px' }}>
              <div className="stat-label">AADT (2021)</div>
              <div className="stat-value text-primary" style={{ fontSize: '1.5rem' }}>{selectedSite.adt.toLocaleString()}</div>
            </div>
            <div className="stat-box" style={{ padding: '12px' }}>
              <div className="stat-label">Base PCU (Eq 2)</div>
              <div className="stat-value text-accent" style={{ fontSize: '1.5rem' }}>{selectedSite.pcu}</div>
            </div>
            <div className="stat-box" style={{ padding: '12px' }}>
              <div className="stat-label">Primary Interaction</div>
              <div className="text-muted" style={{ fontWeight: '500' }}>{selectedSite.interaction}</div>
            </div>
            <div className="stat-box" style={{ padding: '12px' }}>
              <div className="stat-label">VISSIM ax (Standstill)</div>
              <div className="text-muted" style={{ fontWeight: '500' }}>0.65m</div>
            </div>
          </div>
        ) : (
          <p className="text-muted" style={{ marginTop: '20px' }}>
            <i className="fa-solid fa-satellite" style={{ marginRight: '8px' }}></i>
            Awaiting telemetry... Select a marker on the geospatial console to view detailed interaction analysis and VISSIM parameters.
          </p>
        )}
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

      {/* Mixed Methods Section Header */}
      <div id="explorer" className="col-span-12" style={{ marginTop: '40px', textAlign: 'center' }}>
        <p className="nexus-eyebrow">DATA CORE ENUMERATION</p>
        <h2 className="text-primary" style={{ fontSize: '2.5rem' }}>Mixed Methods Analysis</h2>
        <p className="text-muted">Primary & Secondary Data Synthesis</p>
      </div>
        
      <div className="glass-card col-span-6">
        <p className="nexus-eyebrow">MACRO TRENDS</p>
        <h3>Longitudinal Growth</h3>
        <div style={{ height: '300px' }}>
          <Bar 
            data={{
              labels: ['Peak Volume (Veh/Hr)', 'Tricycle Modal Share (%)'],
              datasets: [
                { label: 'Secondary (MoWT 2021)', data: [215, 4.2], backgroundColor: '#10b981' },
                { label: 'Primary (2026)', data: [700, 14.8], backgroundColor: '#00f2ff' }
              ]
            }}
            options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: '#f1f5f9' } } }, scales: { y: { grid: { color: '#2a2a2a' } }, x: { grid: { display: false } } } }}
          />
        </div>
      </div>

      <div className="glass-card col-span-6">
        <p className="nexus-eyebrow">BEHAVIORAL INSIGHTS</p>
        <h3>Qualitative Thematic Analysis</h3>
        <div style={{ height: '300px' }}>
          <Pie 
            data={{
              labels: ['Pothole Swerving Fear', 'Police Extortion Avoidance', 'Fatigue Straddling'],
              datasets: [{ data: [92, 78, 65], backgroundColor: ['#00f2ff', '#10b981', '#3b82f6'], borderColor: '#111' }]
            }}
            options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#f1f5f9' } } } }}
          />
        </div>
      </div>

    </div>
  );
};

export default InfographicDashboard;
