import React, { useState, useEffect } from 'react';

const Layout = ({ children, activeTab, setActiveTab }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark"><i className="fa-solid fa-satellite-dish"></i></div>
          <div>
            <h1>TRICYCLE Nexus</h1>
            <p className="nexus-version">V2.0 PREMIUM</p>
          </div>
        </div>

        <nav className="nav-links">
          <button 
            type="button"
            onClick={() => setActiveTab('overview')}
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
          >
            <i className="fa-solid fa-map"></i>
            <span>Overview</span>
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('analytics')}
            className={`nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
          >
            <i className="fa-solid fa-chart-pie"></i>
            <span>Analytics</span>
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('explorer')}
            className={`nav-item ${activeTab === 'explorer' ? 'active' : ''}`}
          >
            <i className="fa-solid fa-database"></i>
            <span>Explorer</span>
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('thesis')}
            className={`nav-item ${activeTab === 'thesis' ? 'active' : ''}`}
          >
            <i className="fa-solid fa-book-open"></i>
            <span>Thesis</span>
          </button>
        </nav>

        <div className="topbar-actions">
          <div className="live-clock" aria-label="Live local time">{time}</div>
          <div className="status-block">
            <div className="system-status">
              <span className="status-dot"></span>
              <span className="status-text">System Online</span>
            </div>
            <p className="agency-text">Kampala Capital City Authority</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
