function calculator() {
  let number1 = parseFloat(prompt("Enter the first number:"));
  let number2 = parseFloat(prompt("Enter the second number:"));
  let operation = prompt("Enter the mathematical operation (+, -, *, /):");

  if (isNaN(number1) || isNaN(number2)) {
    console.log("Wrong input. Please enter valid numbers.");
    return;
  }

  let result;

  switch (operation) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      if (number2 !== 0) {
        result = number1 / number2;
      } else {
        console.log("Error: Division by zero is not allowed.");
        return;
      }
      break;
    default:
      console.log("Wrong operation. Please enter +, -, *, or /.");
      return;
  }

  result = parseInt(result);

  console.log(`${number1} ${operation} ${number2} = ${result}`);
}

calculator();