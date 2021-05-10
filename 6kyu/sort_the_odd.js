// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

'use strict';

function sortArray(numbers) {
  let oddsInOrder = numbers.filter(digit => digit % 2 !== 0).sort((a, b) => a - b);
  
  let orderedDigits = [];
  for(const digit of numbers) {
    if (digit % 2 === 0) {
      orderedDigits.push(digit);
    }
    else {
      orderedDigits.push(oddsInOrder[0]);
      oddsInOrder.shift();
    }
  }
  return orderedDigits;
}
