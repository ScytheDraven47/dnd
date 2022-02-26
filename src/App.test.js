import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})

test('adds a bear', () => {
  render(<App />)
  const button = screen.getByText(/add a bear/i)
  expect(screen.getByText(/[0-9] bears/i)).toHaveTextContent('0 bear')
  fireEvent.click(button)
  expect(screen.getByText(/[0-9] bears/i)).toHaveTextContent('1 bear')
})
