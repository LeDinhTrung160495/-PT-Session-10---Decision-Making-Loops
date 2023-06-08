let money = Number(prompt('Tiền gửi ngân hàng ban đầu:'));
let interestRate = Number(prompt('Lãi suất năm:'));
let month = Number(prompt('Số tháng gửi:'));
let profit = 0;
for (let i = 1; i <= month; i++) {
  profit += money * (interestRate / 12);
  money += money * (interestRate / 12);
}
console.log('Số tiền lãi nhận được sau ' + month + ' tháng là: ' + profit);
console.log('Số tiền nhận được sau ' + month + ' tháng là: ' + money);
