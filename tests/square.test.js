const Square = require('../lib/square.js');

describe('Square', () => {
  test('should render square with given params', () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="150" height="150" fill="red"/>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
    const square = new Square('red', 'SVG', 'white');
    expect(square.render()).toEqual(expectedSVG);
  });
});