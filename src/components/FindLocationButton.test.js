import React from 'react'
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library'
import 'jest-dom/extend-expect'
import FindLocationButton from './FindLocationButton'

afterEach(cleanup)

test('Should Render Find location button without crashing', async () => {
  const mock = {
    resultData: {
      loading: false,
    },
  }
  const { getByText, getByTestId } = render(<FindLocationButton {...mock} />)
  const resultNode = await waitForElement(() => getByText('Find MyLocation'))
  expect(resultNode.innerHTML).toBe('Find MyLocation')
})

test('Should Render Find location button without crashing', async () => {
  const mock = {
    resultData: {
      loading: true,
    },
  }
  const { getByText } = render(<FindLocationButton {...mock} />)
  const resultNode = await waitForElement(() => getByText('Fetching...'))
  expect(resultNode.innerHTML).toBe('Fetching...')
})
