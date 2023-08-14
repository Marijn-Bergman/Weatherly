import React, { useState } from 'react';
import expandMoreImg from './img/expand_more.svg';
import expandLessImg from './img/expand_less.svg';

const minMaxTempImg = require('./images/thermometer.svg').default;
const visibilityImg = require('./images/eye.svg').default;
const chanceOfRainImg = require('./images/rainOvercast.svg').default;
const windSpeedImg = require('./images/wind.svg').default;
const chanceOfSnowImg = require('./images/snowOvercast.svg').default;
const dewPointImg = require('./images/droplet-graden.svg').default;
const humidityImg = require('./images/droplet.svg').default;
const uvIndexImg = require('./images/sun.svg').default;
const pressureImg = require('./images/druk.svg').default;
const moonPhaseImg = require('./images/moon.svg').default;

const WeatherDetails = ({ city, weather, activeDay }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (!weather || !weather.forecast || !weather.forecast.forecastday || !weather.forecast.forecastday[0]) {
    return <div>Loading...</div>;
  }

  const dayData = weather.forecast.forecastday[activeDay].day;
  const astroData = weather.forecast.forecastday[activeDay].astro;

  const weatherDetailsData = [
    { label: 'Min/Max Temp', value: `${dayData.mintemp_c}°C / ${dayData.maxtemp_c}°C`, icon: minMaxTempImg },
    { label: 'Visibility', value: `${dayData.avgvis_km} km`, icon: visibilityImg },
    { label: 'Chance of Rain', value: `${dayData.daily_chance_of_rain}%`, icon: chanceOfRainImg },
    { label: 'Wind Speed', value: `${dayData.maxwind_kph} km/h`, icon: windSpeedImg },
    { label: 'Chance of Snow', value: `${dayData.daily_chance_of_snow}%`, icon: chanceOfSnowImg },
    { label: 'Dew Point', value: `${dayData.dewpoint_c}°C`, icon: dewPointImg },
    { label: 'Humidity', value: `${dayData.avghumidity}%`, icon: humidityImg },
    { label: 'UV Index', value: dayData.uv, icon: uvIndexImg },
    { label: 'Pressure', value: `${weather.current.pressure_mb} mb`, icon: pressureImg },
    { label: 'Moon Phase', value: astroData.moon_phase, icon: moonPhaseImg },
  ];

  return (
    <div className="weatherDetailsContainer">
      <div className="weatherDetailsHeader">
        <h2 className="weatherDetailsTitle">Today's Weather Details for {city}</h2>
        <button onClick={() => setShowDetails(!showDetails)}>
          <img src={showDetails ? expandLessImg : expandMoreImg} alt="Toggle" />
        </button>
      </div>
      {showDetails && 
        <div className="weatherDetailsGrid">
          {weatherDetailsData.map((detail, index) => (
            <div className="weatherDetail" key={index}>
              <img src={detail.icon} alt={detail.label} />
              <span>{detail.label}: {detail.value}</span>
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default WeatherDetails;