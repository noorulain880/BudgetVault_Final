import React, { useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import TransactionForm from '../components/TransactionForm';
import '../styles/main.css';

const Dashboard = () => {
  const [reload, setReload] = useState(false);

  return (
    <div className="app-container">
      <h1 style={{ borderBottom: '2px solid var(--purple-mid)', paddingBottom: '10px' }}>
        Budget <span style={{ color: 'var(--neon)' }}>Vault</span>
      </h1>
      
      <div className="stats-grid">
        <DashboardCard title="Total Balance" amount="5,000" />
        <DashboardCard title="Total Income" amount="8,000" />
        <DashboardCard title="Total Expense" amount="3,000" />
      </div>

      <div style={{ background: 'rgba(45,0,77,0.2)', padding: '20px', borderRadius: '15px' }}>
        <TransactionForm setReload={setReload} reload={reload} />
      </div>
    </div>
  );
};

export default Dashboard;