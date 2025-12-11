import React, { useEffect, useState } from 'react';
import { getTransactions, deleteTransaction } from '../api/transactionApi';
import TransactionForm from '../components/TransactionForm';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await getTransactions();
      setTransactions(res.data);
    };
    fetchTransactions();
  }, [reload]);

  const handleDelete = async (id) => {
    await deleteTransaction(id);
    setReload(!reload);
  };

  return (
    <div>
      <h1>Transactions</h1>
      <TransactionForm setReload={setReload} reload={reload} />
      <ul>
        {transactions.map(t => (
          <li key={t._id}>
            {t.type} - ${t.amount} - {t.category} - {t.date}
            <button onClick={() => handleDelete(t._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
