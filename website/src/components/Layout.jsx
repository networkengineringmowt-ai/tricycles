import React from 'react';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ 
        padding: '20px 40px', 
        background: 'rgba(11, 14, 20, 0.8)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--card-border)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <h2 className="text-primary" style={{ margin: 0, fontSize: '1.5rem' }}>Kampala Traffic PCU</h2>
        </div>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <a href="#hero" className="text-muted" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Overview</a>
          <a href="#dashboard" className="text-muted" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Dashboard</a>
          <a href="#explorer" className="text-muted" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Data Explorer</a>
        </nav>
      </header>

      <main style={{ flex: 1 }}>
        {children}
      </main>

      <footer style={{ 
        padding: '40px 20px', 
        textAlign: 'center', 
        borderTop: '1px solid var(--card-border)',
        background: 'var(--bg-color)',
        color: 'var(--text-muted)',
        marginTop: '40px'
      }}>
        <p>Research Thesis by Sserunjogi Ambrose | KiU</p>
        <p style={{ fontSize: '0.8rem' }}>Data Source: MOWT/UNRA Repository</p>
      </footer>
    </div>
  );
};

export default Layout;
