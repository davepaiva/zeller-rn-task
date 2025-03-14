import {render, screen} from '@testing-library/react-native';
import Text from '../index';
import theme from '@styles/theme';

describe('Text', () => {
  it('should render correct text content', () => {
    const text = 'Hello world';

    render(<Text>{text}</Text>);

    expect(screen.getByText(text)).toBeOnTheScreen();
  });

  it('applies heading style when variant is heading', () => {
    const text = 'Hello World';

    render(<Text variant="heading">{text}</Text>);

    const textElement = screen.getByText(text);

    expect(textElement).toHaveStyle({
      fontSize: theme.fontSizes.heading,
      fontWeight: theme.fontWeights.heading,
    });
  });

  it('applies subtitle style when variant is subtitle', () => {
    const text = 'Hello World';

    render(<Text variant="subtitle">{text}</Text>);

    const textElement = screen.getByText(text);

    expect(textElement).toHaveStyle({
      fontSize: theme.fontSizes.subtitle,
    });
  });
});
