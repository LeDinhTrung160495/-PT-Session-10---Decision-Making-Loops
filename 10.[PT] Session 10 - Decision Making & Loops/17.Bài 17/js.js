let number1 = Number(prompt('Nhập vào số thứ nhất:'));
let number2 = Number(prompt('Nhập vào số thứ hai:'));
let number3 = Number(prompt('Nhập vào số thứ ba:'));

let arr = [];
arr.push(number1, number2, number3);
for (let i = 0; i <= arr.length - 2; i++) {
  for (let j = 1; j <= arr.length - 1; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log(
  'Sắp xếp 3 số nhập vào theo thứ tự giảm dần: ' +
    arr[0] +
    ', ' +
    arr[1] +
    ', ' +
    arr[2]
);
