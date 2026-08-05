import React, { useState, useEffect } from 'react';

const Layout = ({ children }) => {
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
          <a href="#hero" className="nav-item active">
            <i className="fa-solid fa-map"></i>
            <span>Overview</span>
          </a>
          <a href="#dashboard" className="nav-item">
            <i className="fa-solid fa-chart-pie"></i>
            <span>Analytics</span>
          </a>
          <a href="#explorer" className="nav-item">
            <i className="fa-solid fa-book-open"></i>
            <span>Explorer</span>
          </a>
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
