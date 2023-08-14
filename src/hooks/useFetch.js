import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (city) => {
  const [data, setData] = useState();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;

    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.log(error));
  }, [city]);

  return data;
};


const useFetchWithQuery = (param, query) => {
  const [data, setData] = useState();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    if (query != null) {

      let url = `${param}?key=${apiKey}&${query}`;
      axios
        .get(url)
        .then((response) => { setData(response.data); })
        .catch((error) => console.log(error));
    }
  }, [param, query]);


  return data;
};

const useForecast = (city) => {
  const [forecastData, setForecastData] = useState();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`;

    axios
      .get(url)
      .then((response) => {
        setForecastData(response.data);
      })
      .catch((error) => console.log(error));
  }, [city]);

  return forecastData;
};

export { useFetch as default, useFetchWithQuery, useForecast };