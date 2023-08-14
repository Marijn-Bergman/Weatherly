import React from 'react';
import useFetch from '../hooks/useFetch';

const WeatherBox = ({ city }) => {
  const weatherData = useFetch(city);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="weather-box">
      <div className="weather-condition">
        {weatherData.current.temp_c}°C in {city}
      </div>
      <div className="weather-condition">
        <p>{weatherData.current.condition.text}</p>
        <img
          src={weatherData.current.condition.icon}
          alt={weatherData.current.condition.text}
        />
      </div>
    </div>
  );
};

export default WeatherBox;