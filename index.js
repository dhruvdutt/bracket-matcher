const chalk = require('chalk');

const checkBrackets = require('./src/checkBrackets');
const {printConsole} = require('./src/utils');

if (process.argv.length > 2) {
  const input = process.argv[2];
  printConsole(input, checkBrackets(input));

  // end process to show only inputted test-case
  process.exit();
}

console.log(chalk.cyan('\nno mistakes in brackets'));
['{[()]}', '{}[]()', '{()}[{}]', '[[[]]]{}', '()({()})'].forEach((input) => {
  printConsole(input, checkBrackets(input));
});

console.log(chalk.cyan('\nfirst unmatched closing bracket'));
[']()', '()[}', '([)', '(((][()', '[{]()'].forEach((input) => {
  printConsole(input, checkBrackets(input));
});

console.log(chalk.cyan('\nfirst unmatched opening bracket'));
['{}([]', '{[]()', '{}(()', '{[[]]()', 'H{i[r[e] M]e()${-Dhruv}dutt'].forEach(
  (input) => {
    printConsole(input, checkBrackets(input));
  }
);
