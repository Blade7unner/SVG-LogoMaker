import { Text } from './text.js';

describe('Text', () => {
  test('renders SVG markup correctly', () => {
    const text = new Text('SVG', 'black', '16');
    expect(text.render()).toBe('<text x="50" y="50" fill="black" font-size="16">SVG</text>');
  });
});
