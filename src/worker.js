/* eslint-disable no-unused-vars */
self.addEventListener('message', (e) => {
  const code = `
  ${sum.toString()};
  ${getValidUsers.toString()};
  ${getPositions.toString()};
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
const getPositions = (params) => {
  switch (params) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    default:
      break;
  }
};
