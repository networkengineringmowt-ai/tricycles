import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const DataExplorer = () => {
  return (
    <div className="workspace-grid">
      <div className="col-span-12" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p className="nexus-eyebrow">DATA CORE ENUMERATION</p>
        <h2 className="text-primary" style={{ fontSize: '2.5rem' }}>Mixed Methods Analysis</h2>
        <p className="text-muted">Primary & Secondary Data Synthesis</p>
      </div>
        
      <div className="glass-card col-span-6">
        <p className="nexus-eyebrow">MACRO TRENDS</p>
        <h3>Longitudinal Growth</h3>
        <div style={{ height: '400px' }}>
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
        <div style={{ height: '400px' }}>
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

export default DataExplorer;
