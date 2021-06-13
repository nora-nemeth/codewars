// https://www.codewars.com/kata/52de553ebb55d1fca3000371

'use strict';

function findMissing(numbers) {
  const count = numbers.length;
  const first = numbers[0];
  const last = numbers[count - 1];
  const expectedSum = (count + 1) * (first + last) / 2;
  const add = (a, b) => a + b;
  const sum = numbers.reduce(add, 0);
  return expectedSum - sum;
}
