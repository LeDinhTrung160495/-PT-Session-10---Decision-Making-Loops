let number = Number(prompt('Nhập vào một số nguyên:'));
let sum = 0;
for (let i = 0; i <= number; i += 2) {
  console.log(i);
  sum += i;
}
console.log('Tính tổng các số chẵn từ 1 đến n: ' + sum);
