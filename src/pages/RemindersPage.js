import React, { useState } from 'react';

function RemindersPage() {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState('');

  const addReminder = (e) => {
    e.preventDefault();
    setReminders([...reminders, newReminder]);
    setNewReminder('');
  };

  return (
    <div>
      <h2>Reminders</h2>
      <form onSubmit={addReminder}>
        <div>
          <label htmlFor="reminder">New Reminder:</label>
          <input
            type="text"
            id="reminder"
            value={newReminder}
            onChange={(e) => setNewReminder(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Reminder</button>
      </form>
      <h3>Your Reminders:</h3>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>{reminder}</li>
        ))}
      </ul>
    </div>
  );
}

export default RemindersPage;
