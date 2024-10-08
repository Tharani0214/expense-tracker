import React from 'react';

function TransactionTable({ transactions }) {
  // Check if transactions is defined and is an array
  if (!transactions || !Array.isArray(transactions)) {
    return <div>No transactions available</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.date}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
