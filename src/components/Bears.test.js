import { fireEvent, render, screen } from '@testing-library/react'
import Bears from '../components/Bears'

test('add bear', () => {
  render(<Bears />)
  const addButton = screen.getByText(/add/i)
  expect(screen.getByText(/[0-9] bear/i)).toHaveTextContent('0 bear')
  fireEvent.click(addButton)
  expect(screen.getByText(/[0-9] bear/i)).toHaveTextContent('1 bear')
  fireEvent.click(addButton)
  expect(screen.getByText(/[0-9] bear/i)).toHaveTextContent('2 bear')
  fireEvent.click(addButton)
  expect(screen.getByText(/[0-9] bear/i)).toHaveTextContent('3 bear')
})

test('reset bears', () => {
  render(<Bears />)
  const addButton = screen.getByText(/add/i)
  const resetButton = screen.getByText(/reset/i)
  fireEvent.click(addButton)
  fireEvent.click(addButton)
  fireEvent.click(addButton)
  fireEvent.click(resetButton)
  expect(screen.getByText(/[0-9] bears/i)).toHaveTextContent('0 bear')
})
