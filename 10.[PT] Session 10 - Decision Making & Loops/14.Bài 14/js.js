let number = Number(prompt('Nhập vào một số nguyên n:'));
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
if (number <= 1) {
  alert('Số vừa nhập không hợp lệ, vui lòng nhập nguyên lớn hơn hoặc bằng 2');
} else {
  for (let j = 2; j <= number; j++) {
    if (isPrime(j)) {
      console.log('Số nguyên tố từ 1 đến n là: ' + j);
    }
  }
}
