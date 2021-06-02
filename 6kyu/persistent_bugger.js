// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

'use strict';

function persistence(num) {
  let counter = 0;

  while(num.toString().length > 1) {
    let product = num.toString().split('').reduce((a, c) => a * c);
    counter++;
    num = product;
  }

  return counter;
}
