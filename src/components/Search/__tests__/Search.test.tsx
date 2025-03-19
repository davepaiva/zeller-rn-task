import {fireEvent, render} from '@testing-library/react-native';
import Search from '../index';

describe('Search', () => {
  it('should render the placeholder text', () => {
    const onChangeText = jest.fn();
    const handleClear = jest.fn();
    const placeholder = 'placeholder';
    const {getByTestId, getByPlaceholderText} = render(
      <Search
        value="value"
        onChange={onChangeText}
        handleClear={handleClear}
        placeholder={placeholder}
      />,
    );

    expect(getByTestId('search-input')).toBeOnTheScreen();
    expect(getByPlaceholderText(placeholder)).toBeOnTheScreen();
  });

  it('should give back the text in  onChangeText', () => {
    const onChangeText = jest.fn();
    const handleClear = jest.fn();
    const {getByTestId} = render(
      <Search value="Test" onChange={onChangeText} handleClear={handleClear} />,
    );

    const input = getByTestId('search-input');
    fireEvent.changeText(input, 'New Text');

    expect(onChangeText).toHaveBeenCalledWith('New Text');
  });

  it('should display the correct value in the input', () => {
    const onChangeText = jest.fn();
    const handleClear = jest.fn();
    const testValue = 'Test Value';
    const {getByTestId} = render(
      <Search
        value={testValue}
        onChange={onChangeText}
        handleClear={handleClear}
      />,
    );

    const input = getByTestId('search-input');
    expect(input.props.value).toBe(testValue);
  });

  it('should call handleClear when the clear button is pressed', () => {
    const onChangeText = jest.fn();
    const handleClear = jest.fn();
    const {getByTestId} = render(
      <Search value="Test" onChange={onChangeText} handleClear={handleClear} />,
    );

    const clearButton = getByTestId('clear-button');
    fireEvent.press(clearButton);
    expect(handleClear).toHaveBeenCalled();
  });
});
