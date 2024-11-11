
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

function ForecastGraph({ location }) {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecast = async () => {
      const response = await fetch(`api/forecast?location=${location}`);
      const data = await response.json();
      setForecastData(data.temperatures);
    };
    fetchForecast();
  }, [location]);

  const data = {
    labels: forecastData.map((_, i) => `${i}:00`),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: forecastData,
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div>
      <h2>24-Hour Forecast</h2>
      <Line data={data} />
    </div>
  );
}

export default ForecastGraph;
