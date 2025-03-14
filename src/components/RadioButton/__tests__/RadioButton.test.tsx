import {render, fireEvent} from '@testing-library/react-native';
import RadioButtons from '../index';
import theme from '@styles/theme';

// Define the style function inside the mock
jest.mock('react-native-radio-buttons-group', () => {
  const React = require('react');
  const View = require('react-native').View;

  return function MockRadioButtonsGroup({
    radioButtons,
    onPress,
  }: {
    radioButtons: any;
    onPress: any;
    selectedId?: any;
  }) {
    return (
      <View testID="radio-group">
        {radioButtons.map((button: any) => (
          <View
            key={button.id}
            onPress={() => onPress(button.id)}
            testID={`radio-button-${button.id}`}>
            {button.label}
          </View>
        ))}
      </View>
    );
  };
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

    // Check that the radio group is rendered
    expect(getByTestId('radio-group')).toBeOnTheScreen();

    // Check that all options are rendered with correct labels
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

    // Trigger press on the Manager option
    fireEvent.press(getByTestId('radio-button-1'));

    // Check that onSelect was called with the correct ID
    expect(mockOnSelect).toHaveBeenCalledWith('1');
  });
});
