let sum = 0;
while (true) {
  let number = Number(prompt('Nhập vào một số nguyên dương:'));
  if (number <= 0 || number == null) {
    console.log('Chương trình kết thúc');
    break;
  } else {
    sum += number;
  }
}
console.log('Tổng các số nguyên dương là: ' + sum);
