import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="hero">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <img 
          src="/kampala_neon_title.png" 
          alt="Kampala Neon Title" 
          style={{ maxWidth: '100%', height: 'auto', marginBottom: '30px', filter: 'drop-shadow(0 0 20px rgba(0,242,255,0.3))' }} 
        />
        <h1 className="text-primary">Tricycle PCU Analytics</h1>
        <p>
          A comprehensive analysis of tricycle passenger car units (PCU) and their impact on traffic flow in Kampala City.
          This interactive dashboard visualizes weaving behavior, modal share, and volume-to-capacity sensitivity.
        </p>
        
        <div style={{ marginTop: '40px', display: 'flex', gap: '20px', justifyContent: 'center' }}>
          <a href="#dashboard" className="btn active" style={{ textDecoration: 'none' }}>Explore Dashboard</a>
          <a href="#explorer" className="btn" style={{ textDecoration: 'none' }}>Traffic Data</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
