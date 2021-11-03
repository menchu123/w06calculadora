const input = process.argv.slice(2);

const operation = (num1, num2) => {
  const sum = num1 + num2;
  const substraction = num1 - num2;
  const multiplication = num1 * num2;
  const division = num1 / num2;

  return `Resultados:
  ${num1} + ${num2} = ${sum}
  ${num1} - ${num2} = ${substraction}
  ${num1} * ${num2} = ${multiplication}
  ${num1} / ${num2} = ${division}`;
};

const checkInput = (array) => {
  if (
    array.length === 1 ||
    Number.isNaN(+array[0]) ||
    Number.isNaN(+array[1])
  ) {
    console.log("Introduce dos números");
    process.exit(9);
  }
};

checkInput(input);

console.log(operation(+input[0], +input[1]));
