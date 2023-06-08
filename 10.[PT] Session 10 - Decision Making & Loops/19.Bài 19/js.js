let number1;
let number2;
let number3;
let remainNumber1;
let remainNumber2;
for (let i = 100; i <= 999; i++) {
  number1 = i % 10;
  remainNumber1 = Math.floor(i / 10);
  number2 = remainNumber1 % 10;
  remainNumber2 = Math.floor(remainNumber1 / 10);
  number3 = remainNumber2 % 10;
  if (
    Math.pow(number1, 3) + Math.pow(number2, 3) + Math.pow(number3, 3) ===
    i
  ) {
    console.log('Các số Armstrong có 3 chữ số là: ' + i);
  }
}
