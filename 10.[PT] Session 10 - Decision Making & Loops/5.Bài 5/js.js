let html = Number(prompt('Nhập vào điểm HTML:'));
let css = Number(prompt('Nhập vào điểm CSS:'));
let javascript = Number(prompt('Nhập vào điểm Javascript:'));
let average = (html + css + javascript) / 3;
console.log('Điểm trung bình của ba môn là: ' + average);
if (average < 5) {
  console.log('Yếu');
} else if (average < 6) {
  console.log('Kém');
} else if (average < 7) {
  console.log('Trung bình');
} else if (average < 8) {
  console.log('Khá');
} else if (average < 9) {
  console.log('Giỏi');
} else {
  console.log('Xuất sắc');
}
