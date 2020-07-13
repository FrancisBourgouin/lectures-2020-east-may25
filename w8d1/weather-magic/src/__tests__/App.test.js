import React from 'react'
import App from '../App'
import { render, fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

describe('Current weather fetching with API is properly rendered', () => {
  it('should show the weather not fetched yet if we didn\'t click on a city yet', () => {
    const { getByText, getByTestId, queryByTestId } = render(<App />)

    expect(queryByTestId('noTemperature')).toHaveTextContent('Weather not fetched yet')
  })

  it('should show the temperature of Montréal if Montréal is clicked', async () => {
    const { getByText, getByTestId, queryByTestId } = render(<App />)

    const montrealButton = getByText('Montréal')

    fireEvent.click(montrealButton)

    await waitForElement(() => queryByTestId('currentTemperature'))

    expect(queryByTestId('currentTemperature')).toHaveTextContent('Temp is 27°C')

    // waitFor(...).then( expect)
  })
})
