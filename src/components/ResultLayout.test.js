import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'
import 'jest-dom/extend-expect'
import ResultLayout, { isGoodAQI } from './ResultLayout'

afterEach(cleanup)

test('Shoud return AQI index', async () => {
  const mock = {
    pollution: {
      aqi: 50,
    },
  }

  expect(isGoodAQI(mock, 'aqi')).toBeTruthy()
})

test('Shoud return bad AQI index', async () => {
  const mock = {
    pollution: {
      aqi: 100,
    },
  }

  expect(isGoodAQI(mock, 'aqi')).toBeFalsy()
})

test('Shoud return not available', async () => {
  const mock = {
    data: null,
    loading: false,
    message: 'We cannot manage to get data for this area',
    init: false,
  }
  const { getByText } = render(<ResultLayout result={mock} />)
  const greetingTextNode = await waitForElement(() => getByText(mock.message))
  expect(greetingTextNode.innerHTML).toBe(mock.message)
})

test('Shoud show init result screen', async () => {
  const mock = {
    data: null,
    loading: false,
    message: 'Please type in your location to get started',
    init: true,
  }
  const { getByText } = render(<ResultLayout result={mock} />)
  const greetingTextNode = await waitForElement(() => getByText(mock.message))
  expect(greetingTextNode.innerHTML).toBe(mock.message)
})

test('Shoud show weather panel', async () => {
  const mock = {
    data: {
      city: 'Singapore',
      state: 'Singapore',
      country: 'Singapore',
      location: { type: 'Point', coordinates: [103.83350372, 1.3669815] },
      current: {
        weather: { ts: '2019-05-18T11:00:00.000Z', hu: 70, ic: '04n', pr: 1009, tp: 29, wd: 170, ws: 3.1 },
        pollution: { ts: '2019-05-18T12:00:00.000Z', aqius: 55, mainus: 'p2', aqicn: 22, maincn: 'p1' },
      },
    },
    loading: false,
    message: 'Please type in your location to get started',
    init: false,
  }
  const { getByTestId } = render(<ResultLayout result={mock} />)
  const greetingTextNode = await waitForElement(() => getByTestId('weatherpanel'))

  expect(greetingTextNode.innerHTML).not.toBe(null)
})

test('Shoud show air pollution index panel', async () => {
  const mock = {
    data: {
      city: 'Singapore',
      state: 'Singapore',
      country: 'Singapore',
      location: { type: 'Point', coordinates: [103.83350372, 1.3669815] },
      current: {
        weather: { ts: '2019-05-18T11:00:00.000Z', hu: 70, ic: '04n', pr: 1009, tp: 29, wd: 170, ws: 3.1 },
        pollution: { ts: '2019-05-18T12:00:00.000Z', aqius: 55, mainus: 'p2', aqicn: 22, maincn: 'p1' },
      },
    },
    loading: false,
    message: 'Please type in your location to get started',
    init: false,
  }
  const { getByTestId } = render(<ResultLayout result={mock} />)
  const greetingTextNode = await waitForElement(() => getByTestId('pollutionpanel'))
  expect(greetingTextNode.innerHTML).not.toBe(null)
})
