const sum = require('./sum').sum;
const fetchData = require('./sum').fetchData;
const fetchPromise = require('./sum').fetchPromise;

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

test('API response', (done) => {
  function callback(data) {
    try {
      expect(data).toBe('API response');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

test('API response using Promise', () => {
  return fetchPromise().then((data) => {
    expect(data).toBe('API response');
  });
});

test('API response using async/await', async () => {
  const data = await fetchPromise();
  expect(data).toBe('API response');
});

test('mock implementation of basic function', () => {
  const mock = jest.fn((x) => x + 42);
  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1);
});
