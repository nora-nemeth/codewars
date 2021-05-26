// https://www.codewars.com/kata/554b4ac871d6813a03000035

'use strict';

function highAndLow(numbers){
  const numArr = numbers.split(' ').map(str => Number(str));
  return `${Math.max(...numArr)} ${Math.min(...numArr)}`;
}
