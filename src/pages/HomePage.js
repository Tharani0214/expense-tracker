// src/pages/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Make sure to create a separate CSS file for additional styling


function HomePage() {
  return (
    <div className="home-page">
      <h1>Expense Tracker</h1>
    
      <div className="links-container">
        <Link className="link-card" to="/expenses">
          <h3>Expenses Tracking</h3>
          <p>Track and manage your expenses.</p>
        </Link>
        <Link className="link-card" to="/income">
          <h3>Income Tracking</h3>
          <p>Monitor your income sources.</p>
        </Link>
        <Link className="link-card" to="/savings">
          <h3>Savings Buckets</h3>
          <p>Organize your savings into buckets.</p>
        </Link>
        <Link className="link-card" to="/transfer">
          <h3>Transfer Between Accounts</h3>
          <p>Easily transfer funds between accounts.</p>
        </Link>
        <Link className="link-card" to="/reminders">
          <h3>Reminders</h3>
          <p>Set reminders for important tasks.</p>
        </Link>
        <Link className="link-card" to="/excel-integration">
          <h3>Excel Integration</h3>
          <p>Integrate your data with Excel.</p>
        </Link>
      </div>
     
    </div>
  );
}

export default HomePage;
