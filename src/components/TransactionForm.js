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
    <form onSubmit={handleSubmit}>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
