import React, { useState } from 'react';

function IncomePage() {
  const [incomeEntries, setIncomeEntries] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle adding a new income entry
  const handleAddIncome = (e) => {
    e.preventDefault();
    if (amount && description) {
      const newEntry = {
        id: Date.now(),
        amount: parseFloat(amount),
        description,
      };
      setIncomeEntries([...incomeEntries, newEntry]);
      setAmount('');
      setDescription('');
    } else {
      alert('Please enter both amount and description.');
    }
  };

  // Function to handle removing an income entry
  const handleRemoveIncome = (id) => {
    setIncomeEntries(incomeEntries.filter(entry => entry.id !== id));
  };

  return (
    <div>
      <h2>Income Tracking</h2>
      
      <form onSubmit={handleAddIncome}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Add Income</button>
      </form>

      {incomeEntries.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {incomeEntries.map((entry) => (
              <tr key={entry.id}>
                <td>${entry.amount.toFixed(2)}</td>
                <td>{entry.description}</td>
                <td>
                  <button onClick={() => handleRemoveIncome(entry.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No income entries added yet.</p>
      )}
    </div>
  );
}

export default IncomePage;
