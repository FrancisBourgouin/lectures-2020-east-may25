import { parseTempInCelsius } from '../helpers'

describe("Tests for helper functions", () => {
  it("Should return the proper temperature given a temp in Kelvin", () => {

    const result = parseTempInCelsius(280) //7

    expect(result).toEqual("7°C")
  })
})
