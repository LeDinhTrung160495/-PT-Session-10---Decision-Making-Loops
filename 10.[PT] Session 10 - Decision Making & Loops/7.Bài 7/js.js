let month = Number(prompt('Nhập vào tháng:'));
let year = Number(prompt('Nhập vào năm:'));
let days;
if (month >= 1 && month <= 12) {
  switch (month) {
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
        days = 29;
      } else {
        days = 28;
      }
      break;
    default:
      days = 31;
      break;
  }
  console.log('Năm ' + year + ' tháng ' + month + ' có ' + days + ' ngày');
} else {
  console.log('Bạn vừa nhập giá trị không phải là tháng');
}
