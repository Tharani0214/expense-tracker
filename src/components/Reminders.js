import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Reminders() {
  const [reminderDate, setReminderDate] = useState(null);

  const handleDateChange = (date) => {
    setReminderDate(date);
  };

  return (
    <div>
      <h2>Set Reminders</h2>
      <DatePicker
        selected={reminderDate}
        onChange={handleDateChange}
        placeholderText="Select a date for your reminder"
      />
    </div>
  );
}

export default Reminders;
