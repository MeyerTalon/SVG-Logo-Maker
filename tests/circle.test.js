const Circle = require('../lib/circle.js');

describe('Circle', () => {
  test('should render circle with given params', () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="red"/>
    <text x="150" y="110" font-size="60" text-anchor="middle" fill="white">SVG</text>   
</svg>`;
    const circle = new Circle('red', 'SVG', 'white');
    expect(circle.render()).toEqual(expectedSVG);
  });
});
