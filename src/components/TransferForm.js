import React, { useState } from 'react';

function TransferForm({ onTransfer }) {
  const [formData, setFormData] = useState({ amount: '', from: '', to: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onTransfer(formData.amount, formData.from, formData.to);
    setFormData({ amount: '', from: '', to: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Transfer Between Accounts</h2>
      <label>Amount</label>
      <input
        type="number"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        required
      />

      <label>From</label>
      <input
        type="text"
        value={formData.from}
        onChange={(e) => setFormData({ ...formData, from: e.target.value })}
        required
      />

      <label>To</label>
      <input
        type="text"
        value={formData.to}
        onChange={(e) => setFormData({ ...formData, to: e.target.value })}
        required
      />

      <button type="submit">Transfer</button>
    </form>
  );
}

export default TransferForm;
