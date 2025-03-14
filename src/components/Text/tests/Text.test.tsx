import {render, screen} from '@testing-library/react-native';
import Text from '../index';

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

    expect(textElement.props.style).toContainEqual(
      expect.objectContaining({
        fontSize: 16,
        fontWeight: '500',
      }),
    );
  });

  it('applies subtitle style when variant is subtitle', () => {
    const text = 'Hello World';

    render(<Text variant="subtitle">{text}</Text>);

    const textElement = screen.getByText(text);

    expect(textElement.props.style).toContainEqual(
      expect.objectContaining({fontSize: 12}),
    );
  });

  it('applies custom color', () => {
    const text = 'Hello World';

    render(<Text color="#FF0000">{text}</Text>);

    const textElement = screen.getByText(text);

    expect(textElement.props.style).toContainEqual(
      expect.objectContaining({color: '#FF0000'}),
    );
  });

  it('applies custom style', () => {
    const customStyle = {marginTop: 10};
    const text = 'Hello World';
    render(<Text style={customStyle}>{text}</Text>);

    const textElement = screen.getByText(text);

    expect(textElement.props.style).toContainEqual(
      expect.objectContaining(customStyle),
    );
  });
});
