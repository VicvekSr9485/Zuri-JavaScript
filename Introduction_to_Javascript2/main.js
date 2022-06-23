// RUN THIS CODE ON BROWSER CONSOLE OR USE THE FOLLOWING HTML LINK TO ACCESS THE FUNCTIONALITY
// 

// program for a simple calculator

// take the operator input
const operator = prompt('Enter an operator ( either +, -, *, / or % ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/'){
    result = number1 / number2;
}
else {
    result = number1 % number2;
}
// display the result
alert(`${number1} ${operator} ${number2} = ${result}`);
