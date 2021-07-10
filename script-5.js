'use strict';

function showFirstMessage(text) {
  console.log(text);
}

showFirstMessage('Xnj njk ');

// function calc(a, b) {
//   return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(2, 34));
// console.log(calc(42, 34));

function ret() {
  let num = 50;

  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
  console.log('Hello!');
};

logger();

const calc = (a, b) => {
  return a + b;
};
calc();
console.log(calc);

const fruit = 'some fruit';

console.log(fruit.indexOf('f')); //поиск в строке, под строка

const logg = 'Hello world';

// console.log(logg.slice(6, 11)); slice делает выборку по буквам можно использовать -6 ,-1

// console.log(logg.substring(6, 11)); делает выборку по буквам нельзя использовать - значение

console.log(logg.substr(6, 11)); //вместо второго аргумента указіваем длину, сколько необходимо вырезать


const num = 12.2;

console.log(Math.round(num)); // возвращает нам число 12

const test = '12.2px';
// console.log(parseInt(test)); возвращает нам число 12
 console.log(parseFloat(test)); // возвращает нам число 12.2