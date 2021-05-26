// https://www.codewars.com/kata/577b9960df78c19bca00007e

'use strict';

const findDigit = function(num, nth) {
  const abs = Math.abs(num);
  
  if (nth <= 0){
    return -1;
  }
  
  if (abs.toString().length < nth) {
    return 0;
  }
  
  let array = abs.toString().split('').reverse().map(Number);
  return array[nth - 1];
}
