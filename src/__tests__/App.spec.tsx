import { render } from '@testing-library/react'
import App from '~/App.tsx'
import { describe, expect, test } from 'vitest'

describe('Renders the main page', () => {
  test('renders', () => {
    render(<App />)
    expect(true).toBeTruthy()
  })
})

describe('something truthy and falsy', () => {
  test('true to be true', () => {
    expect(true).toBe(true)
  })

  test('false to be false', () => {
    expect(false).toBe(false)
  })
})
