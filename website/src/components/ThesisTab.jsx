import React from 'react';

const ThesisTab = () => {
  return (
    <div className="workspace-grid">
      <div className="glass-card col-span-12" style={{ textAlign: 'center', padding: '40px 24px' }}>
        <p className="nexus-eyebrow">ACADEMIC DOCUMENTATION</p>
        <h2 className="text-primary" style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Master's Thesis Deliverables</h2>
        <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
          "Analysis of Tricycle Passenger Car Unit Values for Enhanced Traffic Flow in Kampala City Uganda"
        </p>
      </div>
      
      <div className="glass-card col-span-6">
        <h3 className="text-accent" style={{ borderBottom: 'none' }}>Abstract Summary</h3>
        <p className="text-muted">
          Tricycles (Tuk-Tuks) have rapidly permeated the transport network of Kampala, Uganda, primarily offering last-mile connectivity. However, their unique operational characteristics—such as aggressive weaving, sudden stops, and lower operating speeds—disrupt standard vehicular flow.
          <br/><br/>
          Traditional Passenger Car Unit (PCU) equivalents fail to account for these localized behavioral anomalies. This thesis formulates an empirical PCU model specifically calibrated for the Kampala context, integrating both stochastic microscopic simulation (VISSIM) and qualitative driver behavioral analysis to provide a robust framework for traffic engineers and urban planners.
        </p>
      </div>

      <div className="glass-card col-span-6">
        <h3 className="text-accent" style={{ borderBottom: 'none' }}>Download Center</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="fa-solid fa-file-word" style={{ fontSize: '2rem', color: '#2b579a' }}></i>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Final_Thesis.docx</strong>
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>Full Academic Document</span>
              </div>
            </div>
            <button className="btn"><i className="fa-solid fa-download"></i> Download</button>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="fa-solid fa-file-powerpoint" style={{ fontSize: '2rem', color: '#d24726' }}></i>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Defense_Presentation.pptx</strong>
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>40-Slide Presentation Deck</span>
              </div>
            </div>
            <button className="btn"><i className="fa-solid fa-download"></i> Download</button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <i className="fa-solid fa-file-code" style={{ fontSize: '2rem', color: '#f37726' }}></i>
              <div>
                <strong style={{ display: 'block', color: '#fff' }}>Tricycle_Data_Analysis.ipynb</strong>
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>Jupyter Notebook Source</span>
              </div>
            </div>
            <button className="btn"><i className="fa-solid fa-download"></i> Download</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThesisTab;
