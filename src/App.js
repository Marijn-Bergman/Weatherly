import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import WeatherBox from './components/WeatherBox';
import Forecast from './components/Forecast';
import WeatherDetails from './components/WeatherDetails';
import { useForecast } from './hooks/useFetch';
import './styles.css';

const App = () => {
  const [city, setCity] = useState('Amsterdam');
  const weather = useForecast(city);
  const [activeDay, setActiveDay] = useState(0);

  const handleCitySearch = (searchTerm) => {
    setCity(searchTerm);
  };
  const handleDayChange = (dayIndex) => {
    setActiveDay(dayIndex);
  };
  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleCitySearch} />
      {weather && <WeatherBox city={city} weather={weather} />}
      {weather && <Forecast city={city} onDayChange={handleDayChange} />}
      {weather && <WeatherDetails city={city} weather={weather} activeDay={activeDay} />}
    </div>
  );
};

export default App;
