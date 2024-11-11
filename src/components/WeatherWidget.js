
import React, { useEffect, useState } from 'react';

function WeatherWidget({ location }) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Fetch real-time weather data
    const fetchWeather = async () => {
      const response = await fetch(`api/weather?location=${location}`);
      const data = await response.json();
      setWeather(data);
    };
    fetchWeather();
  }, [location]);

  return (
    <div>
      <h2>Current Weather</h2>
      {weather ? (
        <div>
          <p>{weather.temperature}°C</p>
          <p>{weather.condition}</p>
          <img src={weather.icon} alt="weather icon" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WeatherWidget;
