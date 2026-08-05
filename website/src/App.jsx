import React, { useState } from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import InfographicDashboard from './components/InfographicDashboard';
import SummaryTables from './components/SummaryTables';
import ThesisTab from './components/ThesisTab';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <HeroSection setActiveTab={setActiveTab} />;
      case 'summary':
        return <SummaryTables />;
      case 'analytics':
        return <InfographicDashboard />;
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
