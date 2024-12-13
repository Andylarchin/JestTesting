const sum = require('./sum');

test('Expected to add 1+2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Expected to add 2+2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('Object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('Throws on invalid input', () => {
  expect(() => {
    throw new Error('Invalid input');
  }).toThrow();
});

// Run the test
// $ npm test
