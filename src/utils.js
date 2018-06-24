const chalk = require('chalk');

const isEmpty = (arr) => arr.length === 0;

const isOpeningBracket = (char) => ['[', '{', '('].includes(char);

const isClosingBracket = (char) => [']', '}', ')'].includes(char);

const getOpeningBracket = (char) => {
  switch (char) {
    case ']':
      return '[';
    case '}':
      return '{';
    case ')':
      return '(';
    default:
      return 'Invalid char';
  }
};

const printConsole = (input, invalidIndex) => {
  if (invalidIndex !== null) {
      console.log(
          chalk.red('error: ') +
          input.substr(0, invalidIndex) +
          chalk.bgRed(input[invalidIndex]) +
          input.substr(invalidIndex + 1)
      );
  } else {
      console.log(
          chalk.green('success: ') +
          input
      );
  }
};

module.exports = {
    isEmpty,
    isOpeningBracket,
    isClosingBracket,
    getOpeningBracket,
    printConsole,
};
