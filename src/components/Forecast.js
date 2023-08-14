import React, { useState } from 'react';
import { useForecast } from '../hooks/useFetch';

const timeOfDay = (hour) => {
  if (hour >= 0 && hour < 6) return "Night";
  if (hour >= 6 && hour < 12) return "Morning";
  if (hour >= 12 && hour < 15) return "Noon";
  if (hour >= 12 && hour < 18) return "Afternoon";
  return "Evening";
};

const Forecast = ({ city, onDayChange }) => {
  const forecastData = useForecast(city);
  const [activeDay, setActiveDay] = useState(0);

  const handleTabChange = (index) => {
    setActiveDay(index);
    onDayChange(index);
  };

  if (!forecastData) {
    return <p>Loading...</p>;
  }

  const activeForecast = forecastData.forecast.forecastday[activeDay];

  return (
    <div className="forecastContainer">
      <div className="forecastContent">
        <h2 className="forecastTitle">The forecast for {["Today", "Tomorrow", "The Day After Tomorrow"][activeDay]} in {city}</h2>
        <div className="tabs">
          <button className={`tab ${activeDay === 0 ? 'active' : ''}`} onClick={() => handleTabChange(0)}>Today</button>
          <button className={`tab ${activeDay === 1 ? 'active' : ''}`} onClick={() => handleTabChange(1)}>Tomorrow</button>
          <button className={`tab ${activeDay === 2 ? 'active' : ''}`} onClick={() => handleTabChange(2)}>The Day After Tomorrow</button>
        </div>
        <div className="predictionCellContainer">
          {activeForecast.hour
            .filter(
              (hourData) =>
                [0, 6, 12, 15, 18].indexOf(new Date(hourData.time).getHours()) !== -1
            )
            .map((hourData) => (
              <div className="predictionCell" key={hourData.time_epoch}>
                <h3>{timeOfDay(new Date(hourData.time).getHours())}</h3>
                <img src={hourData.condition.icon} alt={hourData.condition.text} />
                <p>{hourData.temp_c}°C</p>
                <p>
                  {hourData.chance_of_rain > hourData.chance_of_snow
                    ? `${hourData.chance_of_rain}%`
                    : `${hourData.chance_of_snow}%`}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
