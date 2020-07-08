import React from 'react'

export const CityWeather = props => {
  const { weatherData, currentCity } = props
  const kelvinToCelsius = temp => `${Math.round(temp - 273.1)}'C`

  return (
    <>
      <h2>Current city: {currentCity}</h2>
      {weatherData &&
        <>
          <h2>{weatherData.data.weather[0].description}</h2>
          <h3>Temp is {kelvinToCelsius(weatherData.data.main.temp)}</h3>
        </>
      }
      {!weatherData &&
        <h2>Weather not fetched yet</h2>
      }
    </>
  )
}

