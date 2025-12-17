import React from 'react';

const DashboardCard = ({ title, amount }) => {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p>${amount}</p>
    </div>
  );
};

export default DashboardCard;