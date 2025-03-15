import {render} from '@testing-library/react-native';
import CustomerListItem from '../index';

describe('CustomerListItem', () => {
  it('should show user name, user type & first letter of the name ', () => {
    const {getByTestId} = render(<CustomerListItem name="John" role="Admin" />);

    expect(getByTestId('name')).toBeOnTheScreen();
    expect(getByTestId('role')).toBeOnTheScreen();
    expect(getByTestId('initial')).toBeOnTheScreen();
  });

  it('should handle empty name string', () => {
    const {getByTestId} = render(<CustomerListItem name="" role="Admin" />);

    expect(getByTestId('initial')).toBeEmptyElement();
    expect(getByTestId('name')).toBeEmptyElement();
    expect(getByTestId('role')).toBeOnTheScreen();
  });

  it('should handle empty role string', () => {
    const {getByTestId} = render(<CustomerListItem name="John" role="" />);

    expect(getByTestId('name')).toBeOnTheScreen();
    expect(getByTestId('role')).toBeEmptyElement();
    expect(getByTestId('initial')).toBeOnTheScreen();
  });

  it('should handle non-string name prop', () => {
    const {getByTestId} = render(
      <CustomerListItem name={123 as any} role="Admin" />,
    );

    expect(getByTestId('name')).toBeOnTheScreen();
    expect(getByTestId('role')).toBeOnTheScreen();
    expect(getByTestId('initial')).toBeOnTheScreen();
  });

  it('should handle non-string role prop', () => {
    const {getByTestId} = render(
      <CustomerListItem name="John" role={456 as any} />,
    );

    expect(getByTestId('name')).toBeOnTheScreen();
    expect(getByTestId('role')).toBeOnTheScreen();
    expect(getByTestId('initial')).toBeOnTheScreen();
  });
});
