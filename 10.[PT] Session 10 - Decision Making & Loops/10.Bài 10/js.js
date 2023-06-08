let number = Number(prompt('Nhập vào một số nguyên n:'));
let checkPrimeNumber = false;
let i = 2;
if (number < 2) {
  checkPrimeNumber = false;
} else {
  checkPrimeNumber = true;
  while (i <= Math.sqrt(number)) {
    if (number % i == 0) {
      checkPrimeNumber = false;
    }
    i++;
  }
}
if (checkPrimeNumber) {
  console.log(number + ' là số nguyên tố');
} else {
  console.log(number + ' không phải là số nguyên tố');
}
