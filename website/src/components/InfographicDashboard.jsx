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
    <div className="container" id="dashboard">
      <div className="dashboard-grid">
        
        {/* Dynamic Map Card */}
        <div className="glass-card col-span-2">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Interactive Case Study Map (The Big 5)</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn active">Dry Condition</button>
              <button className="btn">Wet Condition (+20%)</button>
            </div>
          </div>
          <div style={{ height: '400px', borderRadius: '12px', overflow: 'hidden', margin: '15px 0', border: '1px solid var(--card-border)' }}>
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
          <p className="stat-label" style={{textTransform: 'none'}}>Click on markers to see site-specific PCU data and coordinates.</p>
        </div>

        {/* Site Details Sidebar */}
        <div className="glass-card">
          <h3>Site Deep-Dive: <span className="text-primary">{selectedSite ? selectedSite.name : 'Select a site'}</span></h3>
          {selectedSite ? (
            <div style={{ marginTop: '20px' }}>
              <p><b>AADT (2021):</b> {selectedSite.adt.toLocaleString()}</p>
              <p><b>Primary Interaction:</b> {selectedSite.interaction}</p>
              <p><b>Base PCU (Eq 2):</b> {selectedSite.pcu}</p>
              <p><b>VISSIM ax (Standstill):</b> 0.65m</p>
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)' }}>Select a marker on the map to view detailed interaction analysis and VISSIM parameters.</p>
          )}
        </div>

        {/* PCU Sensitivity Analysis */}
        <div className="glass-card">
          <h3>Congestion Sensitivity Analysis</h3>
          <p style={{ color: 'var(--text-muted)' }}>Adjust V/C Ratio to see dynamic PCU impact:</p>
          <input 
            type="range" 
            min="0.2" max="1.0" step="0.1" 
            value={vcRatio} 
            onChange={(e) => setVcRatio(parseFloat(e.target.value))}
            className="custom-slider" 
          />
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
            <div className="stat-box">
              <div className="stat-value">{vcRatio.toFixed(1)}</div>
              <div className="stat-label">V/C Ratio</div>
            </div>
            <div className="stat-box">
              <div className="stat-value text-accent">{adjustedPcu}</div>
              <div className="stat-label">Adjusted PCU</div>
            </div>
          </div>
        </div>

        {/* PCU Heatmap */}
        <div className="glass-card col-span-2">
          <h3>Multivariate PCU Matrix (Modal Share vs V/C)</h3>
          <div style={{ overflowX: 'auto', marginTop: '20px' }}>
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
          <p className="stat-label" style={{textTransform: 'none', marginTop: '15px'}}>Values represent the predicted PCU using Stochastic MLR models.</p>
        </div>

        {/* Impact Radar Chart */}
        <div className="glass-card">
          <h3>Relative Impact on Saturation Flow</h3>
          <div style={{ height: '300px' }}>
            <Radar 
              data={{
                labels: ['Maneuverability', 'Road Space', 'Headway Disruption', 'Speed Consistency', 'Weaving Impact'],
                datasets: [
                  {
                    label: 'Passenger Car (1.0)',
                    data: [0.8, 1.0, 0.9, 1.0, 0.4],
                    borderColor: '#8b949e',
                    backgroundColor: 'rgba(139, 148, 158, 0.2)'
                  },
                  {
                    label: 'Tricycle (Tuk-Tuk)',
                    data: [0.95, 0.6, 1.4, 0.7, 1.5],
                    borderColor: '#ffbd00',
                    backgroundColor: 'rgba(255, 189, 0, 0.2)'
                  }
                ]
              }}
              options={{
                maintainAspectRatio: false,
                scales: { r: { grid: { color: '#30363d' }, angleLines: { color: '#30363d' }, ticks: { backdropColor: 'transparent' } } },
                plugins: { legend: { labels: { color: '#c9d1d9' } } }
              }}
            />
          </div>
        </div>

        {/* Qualitative Data Summary */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3>Statistical Validity</h3>
          <div style={{ display: 'flex', justifyContent: 'space-around', margin: '30px 0' }}>
            <div className="stat-box">
              <div className="stat-value text-accent">&lt;0.05</div>
              <div className="stat-label">ANOVA P-Value</div>
            </div>
            <div className="stat-box">
              <div className="stat-value text-accent">&lt;0.001</div>
              <div className="stat-label">Poisson Chi-Sq</div>
            </div>
            <div className="stat-box">
              <div className="stat-value text-accent">N=6,400</div>
              <div className="stat-label">Primary Sample</div>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)' }}>
            Primary quantitative tests validate the capacity collapse. Our <span className="text-primary">qualitative field interviews</span> (N=50) confirm the behavioral drivers behind these anomalies.
          </p>
        </div>

      </div>

      <div id="explorer" style={{ paddingTop: '60px' }}>
        <h2 className="text-primary" style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem' }}>Mixed Methods Analysis (Primary & Secondary Data)</h2>
        <div className="dashboard-grid">
          
          <div className="glass-card">
            <h3>Longitudinal Growth (Secondary MoWT vs Primary 2026)</h3>
            <div style={{ height: '300px' }}>
              <Bar 
                data={{
                  labels: ['Peak Volume (Veh/Hr)', 'Tricycle Modal Share (%)'],
                  datasets: [
                    { label: 'Secondary Data (MoWT 2021)', data: [215, 4.2], backgroundColor: '#7000ff' },
                    { label: 'Primary Field Data (2026)', data: [700, 14.8], backgroundColor: '#00f2ff' }
                  ]
                }}
                options={{ maintainAspectRatio: false, plugins: { legend: { labels: { color: '#c9d1d9' } } }, scales: { y: { grid: { color: '#30363d' } }, x: { grid: { display: false } } } }}
              />
            </div>
          </div>

          <div className="glass-card">
            <h3>Qualitative Thematic Analysis (Driver Interviews N=50)</h3>
            <div style={{ height: '300px' }}>
              <Pie 
                data={{
                  labels: ['Pothole Swerving/Rollover Fear', 'Police Extortion Avoidance', 'Fatigue-Induced Straddling'],
                  datasets: [{ data: [92, 78, 65], backgroundColor: ['#ff00c8', '#ffbd00', '#00ff1a'] }]
                }}
                options={{ maintainAspectRatio: false, plugins: { legend: { position: 'bottom', labels: { color: '#c9d1d9' } }, tooltip: { callbacks: { label: function(context) { return context.label + ': ' + context.raw + '% occurrence'; } } } } }}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfographicDashboard;
