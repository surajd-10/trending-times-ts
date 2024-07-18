import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Select from '.';

const mockOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Select component', () => {
  test('renders select options correctly', () => {
    const { getByTestId, getByText } = render(<Select options={mockOptions} value="1" onChange={() => {}} />);

    // Verify select element and its options
    const selectElement = getByTestId('select-element');
    expect(selectElement).toBeInTheDocument();

    mockOptions.forEach(option => {
      const optionElement = getByTestId(`option-${option.value}`);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveTextContent(option.label);
    });
  });

  test('calls onChange handler correctly', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Select options={mockOptions} value="1" onChange={handleChange} />);

    const selectElement = getByTestId('select-element');

    // Simulate change event
    fireEvent.change(selectElement, { target: { value: '2' } });

    // Check if onChange handler is called
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object)); // You can further refine this expectation based on your specific onChange implementation.
  });

  // Add more tests as needed, such as testing default value, edge cases, etc.
});
