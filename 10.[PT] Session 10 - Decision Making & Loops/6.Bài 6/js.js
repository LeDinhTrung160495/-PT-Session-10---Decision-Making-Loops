let a = Number(prompt('Nhập vào cạnh thứ nhất:'));
let b = Number(prompt('Nhập vào cạnh thứ hai:'));
let c = Number(prompt('Nhập vào cạnh thứ ba:'));
if (a + b > c && a + c > b && c + b > a) {
  let checkIsoscelesTriangle = false;
  if (a == b || b == c || c == a) {
    checkIsoscelesTriangle = true;
  }
  let checkEquilateralTriangle = false;
  if (a == b && b == c) {
    checkEquilateralTriangle = true;
  }
  let checkRightTriangle = false;
  if (
    a * a + b * b == c * c ||
    a * a + c * c == b * b ||
    b * b + c * c == a * a
  ) {
    checkRightTriangle = true;
  }
  if (checkEquilateralTriangle) {
    console.log('Đây là 3 cạnh của tam giác đều');
  } else {
    if (checkIsoscelesTriangle) {
      if (checkRightTriangle) {
        console.log('Đây là 3 cạnh của tam giác vuông cân');
      } else {
        console.log('Đây là 3 cạnh của tam giác cân');
      }
    } else {
      if (checkRightTriangle) {
        console.log('Đây là 3 cạnh của tam giác vuông');
      } else {
        console.log('Đây là 3 cạnh của tam giác thường');
      }
    }
  }
} else {
  console.log('Đây không phải là 3 cạnh của tam giác');
}
