import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import InfographicDashboard from './components/InfographicDashboard';
import './index.css';

function App() {
  return (
    <Layout>
      <HeroSection />
      <InfographicDashboard />
    </Layout>
  );
}

export default App;
