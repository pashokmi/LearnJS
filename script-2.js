'use strict';
if (4 == 9) {
  console.log('ok!');
} else {
  console.log('error!');
}

// const nuum = 50;

// if (num < 49) {
//   console.log('error');
// } else if (num > 100) {
//   console.log('Много');
// } else {
//   console.log('ok!');
// }

const num = 50;

switch (num) {
  case 49:
    console.log('Не верно');
    break;
  case 100:
    console.log('Не верно');
    break;
  case 50:
    console.log('В точку');
    break;
  default:
    console.log('Не в этот раз');
    break;
}