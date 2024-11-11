
import React, { useState } from 'react';

function NotificationSettings({ setUserPreferences }) {
  const [location, setLocation] = useState('');
  const [time, setTime] = useState('6am');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    setUserPreferences({ location, time, phone });
  };

  return (
    <div>
      <h2>Notification Settings</h2>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="6am">6:00 AM</option>
        <option value="7am">7:00 AM</option>
        <option value="8am">8:00 AM</option>
      </select>
      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default NotificationSettings;
