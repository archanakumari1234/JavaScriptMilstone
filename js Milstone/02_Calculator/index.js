function calculator(num1, num2, operator) {
    let result;
  
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          console.log("Division by zero is not allowed");
          return;
        }
        result = num1 / num2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log(`Result: ${result}`);
  }
  
  // Example usage:
  calculator(5, 3, '+'); // Output: Result: 8
  calculator(5, 3, '-'); // Output: Result: 2
  calculator(5, 3, '*'); // Output: Result: 15
  calculator(5, 3, '/'); // Output: Result: 1.6666666666666667
  calculator(5, 0, '/'); // Output: Division by zero is not allowed
  calculator(5, 3, '%'); // Output: Invalid operator
  