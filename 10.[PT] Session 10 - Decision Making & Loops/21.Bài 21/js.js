let resource;
do {
  resource = Number(prompt('Nhập vào số nhiên liệu'));
  if (isNaN(resource)) {
    alert('Vui lòng nhập số nhiên liệu là một số');
  } else {
    if (resource < 5000 || resource > 30000) {
      alert('Vui lòng nhập số nhiên liệu có giá trị trong khoảng 5000-30000');
    } else {
      break;
    }
  }
} while (true);
let astronaut;
do {
  astronaut = Number(prompt('Nhập vào số phi hành gia'));
  if (isNaN(astronaut)) {
    alert('Vui lòng nhập vào số phi hành gia là một số');
  } else {
    if (astronaut < 1 || astronaut > 7) {
      alert('Vui lòng nhập số phi hành gia từ 1-7');
    } else {
      break;
    }
  }
} while (true);

let resource50km = 100 * astronaut;
let maximumHeight = Math.floor(resource / resource50km) * 50;
let remainFuel = resource % resource50km;
console.log('Số nhiên liệu còn lại:' + remainFuel);
console.log(
  'Độ cao tối đa mà tàu con thoi có thể đạt được: ' + maximumHeight + ' km'
);
