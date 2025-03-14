import {render} from '@testing-library/react-native';
import ListHeaderComponent from '../index';

describe('ListHeader', () => {
  it(`should display text "Admin Users" when selectedFilter is 0`, () => {
    const {getByText} = render(<ListHeaderComponent selectedFilter="0" />);

    expect(getByText('Admin Users')).toBeOnTheScreen();
  });

  it(`should display text "Manager Users" when selectedFilter is 1`, () => {
    const {getByText} = render(<ListHeaderComponent selectedFilter="1" />);

    expect(getByText('Manager Users')).toBeOnTheScreen();
  });
});
