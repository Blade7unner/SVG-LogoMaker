import { Circle, Triangle, Square } from './shapes.js';

describe('Circle', () => {
  test('renders SVG markup correctly', () => {
    const circle = new Circle('red');
    expect(circle.render()).toBe('<circle cx="50" cy="50" r="40" fill="red" />');
  });
});

describe('Triangle', () => {
  test('renders SVG markup correctly', () => {
    const triangle = new Triangle('green');
    expect(triangle.render()).toBe('<polygon points="25,15 75,15 50,65" fill="green" />');
  });
});

describe('Square', () => {
  test('renders SVG markup correctly', () => {
    const square = new Square('blue');
    expect(square.render()).toBe('<rect x="10" y="10" width="70" height="70" fill="blue" />');
  });
});
