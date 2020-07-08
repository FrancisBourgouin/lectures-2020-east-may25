import React from 'react'

export const CityChooser = props => {
  const { setCurrentCity } = props
  const cities = ["Montréal", "Toronto", "Ottawa", "Sundre", "Halifax", null]

  const parsedCities = cities.map(city => <h3 onClick={() => setCurrentCity(city)}>{city ? city : "Reset"}</h3>)
  return (
    <section>
      {/* <h3 onClick={() => setCurrentCity('Montréal')}>Montréal</h3>
      <h3 onClick={() => setCurrentCity('Toronto')}>Toronto</h3>
      <h3 onClick={() => setCurrentCity('Ottawa')}>Ottawa</h3>
      <h3 onClick={() => setCurrentCity('Sundre')}>Sundre</h3>
      <h3 onClick={() => setCurrentCity('Halifax')}>Halifax</h3>
      <h3 onClick={() => setCurrentCity(null)}>Reset</h3> */}

      {parsedCities}

      {/* <select name="" id="">
        {[...Array(100)].map((_, i) => <option>{i}</option>)}
      </select> */}
    </section>
  )
}

