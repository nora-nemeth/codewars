// https://www.codewars.com/kata/57eaeb9578748ff92a000009

'use strict';

function sumMix(numbers) {
  const add = (a, c) => Number(a) + Number(c);
  return numbers.reduce(add, 0);
}
