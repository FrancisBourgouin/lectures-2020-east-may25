import { CityChooser } from "../CityChooser"
import React from 'react'
import { render, fireEvent } from '@testing-library/react';


describe("Tests for the City Chooser component", () => {
  xit("runs without crashing", () => {
    render(<CityChooser />)
  })

  it("should show a list of h3 with cities", () => {
    const cities = ["Montréal", "Toronto", "Ottawa", "Sundre", "Halifax"]
    const { getByText } = render(<CityChooser cities={cities} />)

    for (const city of cities) {
      expect(getByText(city)).toBeInTheDocument()
    }
  })

  it("should print back the name of the city when clicked", () => {
    const fakeSetCurrentCity = jest.fn()
    const cities = ["Montréal", "Toronto", "Ottawa", "Sundre", "Halifax"]

    const { getByText } = render(<CityChooser setCurrentCity={fakeSetCurrentCity} cities={cities} />)


    for (const city of cities) {
      const currentCity = getByText(city)
      fireEvent.click(currentCity)
      expect(fakeSetCurrentCity).toHaveBeenCalledWith(city)
    }


    expect(fakeSetCurrentCity).toHaveBeenCalledTimes(cities.length)


  })

  it("has a reset button that should change the city name to null", () => {
    const fakeSetCurrentCity = jest.fn()
    const { getByText } = render(<CityChooser setCurrentCity={fakeSetCurrentCity} />)

    const reset = getByText('Reset')

    fireEvent.click(reset)

    expect(fakeSetCurrentCity).toHaveBeenCalled()
  })


})