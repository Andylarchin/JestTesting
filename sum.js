const sum = (a, b) => a + b;

const fetchData = (callback) => {
  setTimeout(() => {
    callback('API response');
  }, 500);
};

const fetchPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('API response');
    }, 500);
  });
};

module.exports = { sum, fetchData, fetchPromise };
