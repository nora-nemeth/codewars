// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

'use strict';

function firstNonConsecutive(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i - 1] + 1 !== numbers[i]) {
      return numbers[i];
    }
  }
  
  return null;
}
