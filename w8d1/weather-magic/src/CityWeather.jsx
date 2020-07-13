import React from 'react'
import { parseTempInCelsius } from './helpers'
export const CityWeather = props => {
  const { weatherData, currentCity } = props

  return (
    <>
      <h2>Current city: {currentCity}</h2>
      {weatherData &&
        <>
          <h2>{weatherData.data.weather[0].description}</h2>
          <h3 data-testid="currentTemperature">Temp is {parseTempInCelsius(weatherData.data.main.temp)}</h3>
        </>
      }
      {!weatherData &&
        <h2 data-testid="noTemperature">Weather not fetched yet</h2>
      }
    </>
  )
}

