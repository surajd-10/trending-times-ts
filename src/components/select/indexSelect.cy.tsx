import React from 'react'
import Select from './index'

const mockOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('<Select />', () => {
  it('renders', () => {
    cy.mount(<Select options={mockOptions} value="1" onChange={() => {}} />)
  })
})