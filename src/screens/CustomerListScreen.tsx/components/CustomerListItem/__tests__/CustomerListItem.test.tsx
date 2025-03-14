import {render} from '@testing-library/react-native';
import CustomerListItem from '../index';

describe('CustomerListItem', () => {
  it('should show user name, user type & first letter of the name ', () => {
    const {getByText} = render(<CustomerListItem name="John" role="Admin" />);

    expect(getByText('John')).toBeOnTheScreen();
    expect(getByText('Admin')).toBeOnTheScreen();
    expect(getByText('J')).toBeOnTheScreen();
  });
});
