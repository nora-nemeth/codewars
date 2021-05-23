// https://www.codewars.com/kata/55eca815d0d20962e1000106

'use strict';

function generateRange(min, max, step){
  let range = [min];

  for (let i = 0; range[range.length - 1] <= max - step; i++) {
    range.push(range[range.length - 1] + step);
  }
  return range;
}

console.log(generateRange(2, 10, 2));
