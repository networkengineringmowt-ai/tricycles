import React, { useState } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import InfographicDashboard from './components/InfographicDashboard';
import DataExplorer from './components/DataExplorer';
import ThesisTab from './components/ThesisTab';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <HeroSection setActiveTab={setActiveTab} />;
      case 'analytics':
        return <InfographicDashboard />;
      case 'explorer':
        return <DataExplorer />;
      case 'thesis':
        return <ThesisTab />;
      default:
        return <HeroSection setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}

export default App;
