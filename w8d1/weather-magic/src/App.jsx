import React, { useState } from 'react';
import axios from 'axios'
import { CityChooser } from './CityChooser'
import { CityWeather } from './CityWeather'
import './App.css';
import { useEffect } from 'react';

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
// 09fd719b4b698ec0260e424f83378e3d


function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [currentCity, setCurrentCity] = useState(null)
  const [cities, setCities] = useState(["Montréal", "Toronto", "Ottawa", "Sundre", "Halifax"])
  const appId = "09fd719b4b698ec0260e424f83378e3d"

  useEffect(() => {
    if (currentCity) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${appId}`)
        .then(data => setWeatherData(data))
        .catch(err => setWeatherData(null))
    }
  }, [currentCity])

  return (
    <div className="App">
      <h1>🌞❄☔⚡Weather Checker!⚡☔❄🌞</h1>
      <CityChooser setCurrentCity={setCurrentCity} cities={cities} />
      <CityWeather currentCity={currentCity} weatherData={weatherData} />
    </div>
  );
}

export default App;
