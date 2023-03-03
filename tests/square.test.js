const Square = require('../lib/square.js');

// Tests the Square class's render() method
describe('Square', () => {
  test('should render square with given params', () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="red"/>
    <text x="100" y="110" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
    const square = new Square('red', 'SVG', 'white');
    expect(square.render()).toEqual(expectedSVG);
  });
});