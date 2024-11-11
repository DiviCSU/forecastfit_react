
import React from 'react';

function AccessorySuggestions({ weather }) {
  const suggestions = [];

  if (weather.condition === 'Rain') suggestions.push('Umbrella');
  if (weather.condition === 'Sunny') suggestions.push('Sunglasses');

  return (
    <div>
      <h2>Suggested Accessories</h2>
      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AccessorySuggestions;
