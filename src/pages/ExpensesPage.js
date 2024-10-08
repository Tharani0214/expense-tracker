import React from 'react';
import TransactionForm from '../../src/components/TransactionForm';
import TransactionTable from '../../src/components/TransactionTable';

function ExpensesPage() {
  return (
    <div>
      <h2>Expenses Tracking</h2>
      <TransactionForm />
      <TransactionTable />
    </div>
  );
}

export default ExpensesPage;
