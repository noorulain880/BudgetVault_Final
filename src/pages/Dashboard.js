import React, { useEffect, useState } from 'react';
import { getTransactions } from '../api/transactionApi';
import DashboardCard from '../components/DashboardCard';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await getTransactions();
      setTransactions(res.data);
      const income = res.data.filter(t => t.type === 'income').reduce((a, b) => a + b.amount, 0);
      const expense = res.data.filter(t => t.type === 'expense').reduce((a, b) => a + b.amount, 0);
      setTotalIncome(income);
      setTotalExpense(expense);
    };
    fetchTransactions();
  }, []);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <DashboardCard title="Total Income" amount={totalIncome} />
      <DashboardCard title="Total Expenses" amount={totalExpense} />
      <DashboardCard title="Balance" amount={totalIncome - totalExpense} />
    </div>
  );
};

export default Dashboard;
