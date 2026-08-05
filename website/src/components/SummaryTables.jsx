import React from 'react';

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

const SummaryTables = () => {
  return (
    <div className="workspace-grid">
      <div className="col-span-12" style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p className="nexus-eyebrow">FIELD DATA AGGREGATION</p>
        <h2 className="text-primary" style={{ fontSize: '2.5rem' }}>Primary Traffic Volumes</h2>
        <p className="text-muted">Peak Hour Categorized Vehicle Counts (Veh/Hr) by Study Node</p>
      </div>
        
      <div className="glass-card col-span-12">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div>
            <h3>Empirical Flow Classification</h3>
            <p className="text-muted" style={{ fontSize: '0.85rem' }}>Sample size N=6,400 across all primary nodes</p>
          </div>
          <button className="btn"><i className="fa-solid fa-download" style={{marginRight: '8px'}}></i>Export CSV</button>
        </div>
        
        <div style={{ overflowX: 'auto' }}>
          <table className="heatmap-table" style={{ width: '100%', textAlign: 'right' }}>
            <thead>
              <tr>
                <th style={{ textAlign: 'left', background: 'rgba(0, 242, 255, 0.1)', color: '#00f2ff' }}>Study Node</th>
                <th>Motorcycles (MC)</th>
                <th style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>Tricycles (TC)</th>
                <th>Passenger Cars (PC)</th>
                <th>Minibuses (PSV)</th>
                <th>Light Goods (LGV)</th>
                <th>Heavy Goods (HGV)</th>
                <th>Total Motorized (Veh/Hr)</th>
              </tr>
            </thead>
            <tbody>
              {trafficData.map((row, idx) => {
                const total = row.mc + row.tc + row.pc + row.ps + row.lgv + row.hgv;
                return (
                  <tr key={idx} style={{ transition: 'background 0.2s' }}>
                    <td style={{ textAlign: 'left', fontWeight: 'bold', borderLeft: '4px solid #00f2ff' }}>{row.junction}</td>
                    <td>{row.mc.toLocaleString()}</td>
                    <td style={{ fontWeight: 'bold', color: '#10b981', background: 'rgba(16, 185, 129, 0.05)' }}>{row.tc.toLocaleString()}</td>
                    <td>{row.pc.toLocaleString()}</td>
                    <td>{row.ps.toLocaleString()}</td>
                    <td>{row.lgv.toLocaleString()}</td>
                    <td>{row.hgv.toLocaleString()}</td>
                    <td style={{ fontWeight: 'bold', color: '#fff' }}>{total.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                <td style={{ textAlign: 'left', fontWeight: 'bold' }}>NETWORK TOTAL</td>
                <td style={{ fontWeight: 'bold', color: '#fff' }}>
                  {trafficData.reduce((acc, r) => acc + r.mc, 0).toLocaleString()}
                </td>
                <td style={{ fontWeight: 'bold', color: '#10b981' }}>
                  {trafficData.reduce((acc, r) => acc + r.tc, 0).toLocaleString()}
                </td>
                <td style={{ fontWeight: 'bold', color: '#fff' }}>
                  {trafficData.reduce((acc, r) => acc + r.pc, 0).toLocaleString()}
                </td>
                <td style={{ fontWeight: 'bold', color: '#fff' }}>
                  {trafficData.reduce((acc, r) => acc + r.ps, 0).toLocaleString()}
                </td>
                <td style={{ fontWeight: 'bold', color: '#fff' }}>
                  {trafficData.reduce((acc, r) => acc + r.lgv, 0).toLocaleString()}
                </td>
                <td style={{ fontWeight: 'bold', color: '#fff' }}>
                  {trafficData.reduce((acc, r) => acc + r.hgv, 0).toLocaleString()}
                </td>
                <td style={{ fontWeight: 'bold', color: '#00f2ff', fontSize: '1.2rem' }}>
                  {trafficData.reduce((acc, r) => acc + r.mc + r.tc + r.pc + r.ps + r.lgv + r.hgv, 0).toLocaleString()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      <div className="glass-card col-span-12" style={{ marginTop: '20px' }}>
        <p className="nexus-eyebrow">NON-MOTORIZED TRANSPORT</p>
        <h3>Vulnerable Road User Intersections</h3>
        <p className="text-muted" style={{ marginBottom: '16px' }}>
          Pedestrian and cyclist flows significantly impact tricycle weaving behaviors, particularly at Bwaise and Wandegeya. 
          The table below tracks absolute hourly counts for NMT.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }}>
          {trafficData.map((row, idx) => (
            <div key={idx} className="stat-box" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderTop: '2px solid #00f2ff' }}>
              <div className="stat-label" style={{ minHeight: '32px' }}>{row.junction}</div>
              <div className="stat-value" style={{ color: '#fff', fontSize: '1.8rem', marginTop: '8px' }}>
                {row.nmt.toLocaleString()}
              </div>
              <div className="stat-label" style={{ fontSize: '0.65rem' }}>NMT / Hour</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SummaryTables;
