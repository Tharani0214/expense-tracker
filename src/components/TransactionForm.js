import React, { useState } from 'react';

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({ type: 'expense', amount: '', category: '', description: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData);
    setFormData({ type: 'expense', amount: '', category: '', description: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      <label>Type</label>
      <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <label>Amount</label>
      <input
        type="number"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />

      <label>Category</label>
      <input
        type="text"
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        required
      />

      <label>Description</label>
      <input
        type="text"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />

      <label>Date</label>
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
