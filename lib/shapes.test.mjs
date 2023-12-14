import { Circle, Triangle, Square } from './shapes.js';

describe('Circle', () => {
  test('renders SVG markup correctly', () => {
    const circle = new Circle('red');
    circle.setColor('red');  
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="40" fill="red" />');
  });
});

describe('Triangle', () => {
  test('renders SVG markup correctly', () => {
    const triangle = new Triangle('green');
    triangle.setColor('green');  
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="green" />');
  });
});

describe('Square', () => {
  test('renders SVG markup correctly', () => {
    const square = new Square('blue');
    square.setColor('blue');  
    expect(square.render()).toBe('<rect x="110" y="60" width="80" height="80" fill="blue" />');
  });
});


