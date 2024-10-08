import React, { useState } from 'react';

function TransferPage() {
  const [amount, setAmount] = useState('');
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');

  const handleTransfer = (e) => {
    e.preventDefault();
    // Add your transfer logic here (e.g., update state or send to backend)
    console.log(`Transferred ${amount} from ${fromAccount} to ${toAccount}`);
    // Clear form fields after transfer
    setAmount('');
    setFromAccount('');
    setToAccount('');
  };

  return (
    <div>
      <h2>Transfer Between Accounts</h2>
      <form onSubmit={handleTransfer}>
        <div>
          <label htmlFor="fromAccount">From Account:</label>
          <input
            type="text"
            id="fromAccount"
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="toAccount">To Account:</label>
          <input
            type="text"
            id="toAccount"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default TransferPage;
