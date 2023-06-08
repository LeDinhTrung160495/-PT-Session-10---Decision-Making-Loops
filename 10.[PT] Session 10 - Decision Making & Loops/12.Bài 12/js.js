let number = Number(prompt('Nhập vào một số nguyên:'));
let reversed = 0;
while (number > 0) {
  let digit = number % 10;
  reversed = reversed * 10 + digit;
  number = (number - (number % 10)) / 10;
}
console.log('Số đảo ngược là: ' + reversed);
