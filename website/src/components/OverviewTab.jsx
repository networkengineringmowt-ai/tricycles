import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

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

const OverviewTab = () => {
  const [selectedSite, setSelectedSite] = useState(null);

  return (
    <div className="workspace-grid">
      <div className="glass-card col-span-12" style={{ textAlign: 'center', padding: '40px 24px', background: 'radial-gradient(circle at top, rgba(0, 242, 255, 0.05) 0%, rgba(20, 20, 20, 0.8) 60%)' }}>
        <h1 className="text-primary" style={{ marginBottom: '16px' }}>NETWORK OVERVIEW</h1>
        <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>
          Real-time geospatial deployment console for tracking Tricycle Passenger Car Units (PCU) across the Kampala City road network.
        </p>
      </div>

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
          <MapContainer bounds={[[0.2981, 32.5469], [0.3458, 32.5761]]} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
    </div>
  );
};

export default OverviewTab;
