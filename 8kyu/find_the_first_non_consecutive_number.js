// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

'use strict';

function firstNonConsecutive(numbers) {
  for (let index = 1; index < numbers.length; index++) {
    if (numbers[index] !== numbers[index - 1] + 1) {
      return numbers[index];
    }
  }
  return null;
}
