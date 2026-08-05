import React from 'react';

const HeroSection = ({ setActiveTab }) => {
  return (
    <section id="hero" className="workspace-grid" style={{ marginBottom: '24px' }}>
      <div className="glass-card col-span-12" style={{ textAlign: 'center', padding: '60px 24px', background: 'radial-gradient(circle at top, rgba(0, 242, 255, 0.05) 0%, rgba(20, 20, 20, 0.8) 60%)' }}>
        <img 
          src="kampala_traffic_title.png" 
          alt="Kampala Tricycle Traffic Flow" 
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '30px', filter: 'drop-shadow(0 0 20px rgba(0,242,255,0.2))' }} 
        />
        <h1 className="text-primary" style={{ marginBottom: '16px' }}>TRICYCLE PCU ANALYTICS</h1>
        <p className="text-muted" style={{ maxWidth: '700px', margin: '0 auto 30px', fontSize: '1.1rem' }}>
          A comprehensive analysis of tricycle passenger car units (PCU) and their impact on traffic flow in Kampala City.
          This interactive command center visualizes weaving behavior, modal share, and volume-to-capacity sensitivity.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button onClick={() => setActiveTab('analytics')} className="btn active" style={{ textDecoration: 'none' }}>
            <i className="fa-solid fa-satellite-dish" style={{ marginRight: '8px' }}></i>
            Deploy Dashboard
          </button>
          <button onClick={() => setActiveTab('explorer')} className="btn" style={{ textDecoration: 'none' }}>
            <i className="fa-solid fa-database" style={{ marginRight: '8px' }}></i>
            Access Data Core
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
