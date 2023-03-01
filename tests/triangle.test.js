const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
  test('should render triangle with given params', () => {
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150, 0 200, 150 250" fill="red" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
    const triangle = new Triangle('red', 'SVG', 'white');
    expect(triangle.render()).toEqual(expectedSVG);
  });
});