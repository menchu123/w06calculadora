const chalk = require("chalk");

const input = process.argv.slice(2);

const operation = (num1, num2) => {
  const sum = num1 + num2;
  const substraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num1 / num2;

  return `${chalk.magenta("Resultados:")}
  ${chalk.blueBright(num1)} ${chalk.magenta("+")} ${chalk.blueBright(
    num2
  )} ${chalk.magenta("=")} ${chalk.yellow(sum)}
  ${chalk.blueBright(num1)} ${chalk.magenta("-")} ${chalk.blueBright(
    num2
  )} ${chalk.magenta("=")} ${chalk.yellow(substraction)}
  ${chalk.blueBright(num1)} ${chalk.magenta("*")} ${chalk.blueBright(
    num2
  )} ${chalk.magenta("=")} ${chalk.yellow(multiplication)}
  ${chalk.blueBright(num1)} ${chalk.magenta("/")} ${chalk.blueBright(
    num2
  )} ${chalk.magenta("=")} ${chalk.yellow(division)}`;
};

const checkInput = (array) => {
  if (
    array.length !== 2 ||
    Number.isNaN(+array[0]) ||
    Number.isNaN(+array[1])
  ) {
    console.log(chalk.red("Error: Introduce dos números"));
    process.exit(9);
  }
};

checkInput(input);

console.log(operation(+input[0], +input[1]));
