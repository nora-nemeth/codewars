// https://www.codewars.com/kata/541c8630095125aba6000c00

'use strict';

function digital_root(num) {
  let sumOfDigits = 0;
  num.toString().split('').map(digit => sumOfDigits += +digit);
  
  return sumOfDigits.toString().length > 1 ? digital_root(sumOfDigits) : sumOfDigits;
}
