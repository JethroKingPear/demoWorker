function excuteScript(e) {
  const code = `
        ${sum.toString()};
        ${getValidUsers.toString()};
        ${getPositions.toString()};
        ${deduct.toString()};
        ${getResponsibilities.toString()};
          ${e}
        `;
  let F = new Function(code);
  return F();
}
const sum = (a, b) => a + b;
const deduct = (c, b) => c - b;
const getValidUsers = () => {
  // call API getValidUsers with param
  return {
    response: {
      _code: 200,
      _message: 'ok',
      total_pages: 12,
      total_elements: 5555,
      size: 500,
      number: 2,
      number_of_elements: 500,
      is_last: false,
      is_first: false,
    },
    validate: false,
    errorMessage: {
      contents: 'contents must not empty',
    },
  };
};
const getPositions = () => {
  return {
    response: {
      total_pages: 12,
      total_elements: 5555,
      size: 500,
      number: 2,
      number_of_elements: 500,
      is_last: false,
      is_first: false,
      contents: [
        {
          code: '1',
          level: 1,
          name: '부장',
        },
      ],
    },
    validate: true,
    errorMessage: {
        _code: '_code must be 200',
    },
  };
};

const getResponsibilities = (param) => {
  return {
    response: {
      size: param.pageSize,
      number: param.pageNumber,
      contents: [],
    },
    validate: true,
    errorMessage: {},
  }
}


export { excuteScript };
