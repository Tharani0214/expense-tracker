import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ExpensesPage from './pages/ExpensesPage';
import IncomePage from './pages/IncomePage';
import SavingsPage from './pages/SavingsPage';
import TransferPage from './pages/TransferPage'; 
import RemindersPage from './pages/RemindersPage'; 
import ExcelIntegrationPage from './pages/ExcelIntegrationPage'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/savings" element={<SavingsPage />} />
          <Route path="/transfer" element={<TransferPage />} />
          <Route path="/reminders" element={<RemindersPage />} />
          <Route path="/excel-integration" element={<ExcelIntegrationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
