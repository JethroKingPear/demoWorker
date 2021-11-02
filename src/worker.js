/* eslint-disable no-unused-vars */
self.addEventListener('message', (e) => {
  const code = `
  ${sum.toString()};
  ${getValidUsers.toString()};
  ${deduct.toString()};
  console.log('object');
    ${e.data}
  `;
  let F = new Function(code);
  self.postMessage(F());
});

const sum = (a, b) => a + b;
const deduct = (c, b) => c - b;
const getValidUsers = () => {
  return {
    _code: 200,
    _message: 'Success',
  };
};
