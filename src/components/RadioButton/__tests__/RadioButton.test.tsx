import {render, fireEvent} from '@testing-library/react-native';
import RadioButtons from '../index';

jest.mock('react-native-radio-buttons-group', () => {
  const MockRadioButtonsGroup = require('../__mocks__/index');

  return MockRadioButtonsGroup;
});
describe('RadioButtons Component', () => {
  const mockOptions = [
    {id: '0', label: 'Admin', value: 'admin', isSelected: true},
    {id: '1', label: 'Manager', value: 'manager', isSelected: false},
  ];

  const mockOnSelect = jest.fn();

  it('should render with the correct options', () => {
    const {getByTestId} = render(
      <RadioButtons
        options={mockOptions}
        onSelect={mockOnSelect}
        selectedId="0"
      />,
    );

    expect(getByTestId('radio-group')).toBeOnTheScreen();
    expect(getByTestId('radio-button-0')).toBeOnTheScreen();
    expect(getByTestId('radio-button-1')).toBeOnTheScreen();
  });

  it('should call onSelect when an option is pressed', () => {
    const {getByTestId} = render(
      <RadioButtons
        options={mockOptions}
        onSelect={mockOnSelect}
        selectedId="0"
      />,
    );

    fireEvent.press(getByTestId('radio-button-1'));

    expect(mockOnSelect).toHaveBeenCalledWith('1');
  });
});
