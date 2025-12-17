import React, { useState } from 'react';
import { addTransaction } from '../api/transactionApi';

const TransactionForm = ({ setReload, reload }) => {
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTransaction({ type, amount: Number(amount), category, date });
    setAmount('');
    setCategory('');
    setDate('');
    setReload(!reload);
  };

  return (
    <div className="auth-form" style={{ maxWidth: '100%', margin: '20px 0' }}>
      <h2 style={{ color: 'var(--neon-magenta)', marginBottom: '20px' }}>Add Transaction</h2>
      <form onSubmit={handleSubmit} style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '15px', 
        alignItems: 'end' 
      }}>
        <div>
          <label style={{ fontSize: '12px', color: 'var(--text-dim)', display: 'block', marginBottom: '5px' }}>Type</label>
          <select value={type} onChange={e => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div>
          <label style={{ fontSize: '12px', color: 'var(--text-dim)', display: 'block', marginBottom: '5px' }}>Amount</label>
          <input type="number" placeholder="0.00" value={amount} onChange={e => setAmount(e.target.value)} required />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: 'var(--text-dim)', display: 'block', marginBottom: '5px' }}>Category</label>
          <input type="text" placeholder="e.g. Grocery" value={category} onChange={e => setCategory(e.target.value)} required />
        </div>
        <div>
          <label style={{ fontSize: '12px', color: 'var(--text-dim)', display: 'block', marginBottom: '5px' }}>Date</label>
          <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
        </div>
        <button type="submit" style={{ height: '45px' }}>Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;