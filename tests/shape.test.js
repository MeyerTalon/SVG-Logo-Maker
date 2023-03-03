const Shape = require('../lib/shape.js');

// Tests the Shape class's render() method, should throw an error
describe('Component', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shape();
    const err = new Error('Child class must implement a render() method.')
    expect(shape.render).toThrow(err);
  });
});