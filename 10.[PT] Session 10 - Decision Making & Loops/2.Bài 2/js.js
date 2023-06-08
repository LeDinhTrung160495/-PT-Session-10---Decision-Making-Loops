let number1 = parseInt(prompt('Nhập vào số nguyên thứ nhất:'));
let number2 = parseInt(prompt('Nhập vào số nguyên thứ hai:'));
let number3 = parseInt(prompt('Nhập vào số nguyên thứ ba:'));
let max = number1;
if (max <= number2) {
  max = number2;
}
if (max <= number3) {
  max = number3;
}
console.log('Số nguyên lớn nhất:' + max);
let min = number1;
if (min >= number2) {
  min = number2;
}
if (min >= number3) {
  min = number3;
}
console.log('Số nguyên nhỏ nhất:' + min);
