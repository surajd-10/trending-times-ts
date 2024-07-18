import { render, fireEvent } from '@testing-library/react';
import Select from './index';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

describe('Select component', () => {
  test('renders select options correctly', () => {
    const { getByTestId, getByLabelText } = render(
      <Select options={options} value="2" onChange={() => {}} />
    );

    // Verify if the select element is rendered
    const selectElement = getByTestId('select-element');
    expect(selectElement).toBeInTheDocument();

    // Verify if the correct value is selected
    expect(selectElement).toHaveValue('2');

    // Verify if all options are rendered
    options.forEach((opt) => {
      const optionElement = getByTestId(`option-${opt.value}`);
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveTextContent(opt.label);
    });
  });

  test('calls onChange handler when an option is selected', () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <Select options={options} value="2" onChange={onChangeMock} />
    );

    // Simulate changing the value
    fireEvent.change(getByTestId('select-element'), { target: { value: '3' } });

    // Verify if onChange handler was called with the correct value
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: '3',
      }),
    }));
  });
});
