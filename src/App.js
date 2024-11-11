
import React, { useState } from 'react';
import Header from './components/Header';
import NotificationSettings from './components/NotificationSettings';
import WeatherWidget from './components/WeatherWidget';
import AccessorySuggestions from './components/AccessorySuggestions';
import ForecastGraph from './components/ForecastGraph';

function App() {
  const [userPreferences, setUserPreferences] = useState({});
  const { location } = userPreferences

  return (
    <div className="App">
      <Header />
      <NotificationSettings setUserPreferences={setUserPreferences} />
      {location && (
        <>
          <WeatherWidget location={location} />
          <AccessorySuggestions weather={{ condition: 'Sunny' }} />
          <ForecastGraph location={location} />
        </>
      )}
    </div>
  );
}

export default App;
