import React from 'react'

export const CityChooser = props => {
  const { setCurrentCity, cities } = props

  const parsedCities = cities ?
    cities.map(city => <button key={city} className="city" onClick={() => setCurrentCity(city)}>{city}</button>)
    :
    null

  return (
    <section className="cities">
      {parsedCities}
      <button className="reset" onClick={() => setCurrentCity(null)} >Reset</button>
    </section>
  )
}

