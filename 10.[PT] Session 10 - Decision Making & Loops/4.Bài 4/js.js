let number1 = Number(prompt('Nhập vào số nguyên thứ nhất:'));
let number2 = Number(prompt('Nhập vào số nguyên thứ hai:'));
let operator = prompt('Nhập vào phép tính +,-,*,/,%:');
switch (operator) {
  case '+':
    console.log(number1 + number2);
    break;
  case '-':
    console.log(number1 - number2);
    break;
  case '*':
    console.log(number1 * number2);
    break;
  case '/':
    console.log(number1 / number2);
    break;
  default:
    console.log(number1 % number2);
}
