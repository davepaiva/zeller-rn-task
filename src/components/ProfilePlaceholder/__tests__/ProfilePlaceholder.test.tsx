import {render, screen} from '@testing-library/react-native';
import ProfilePlaceholder from '../index';

describe('ProfilePlaceholder', () => {
  it('should render only the first letter of the name', () => {
    render(<ProfilePlaceholder name="John Doe" />);

    expect(screen.getByText('J')).toBeOnTheScreen();
  });
});
