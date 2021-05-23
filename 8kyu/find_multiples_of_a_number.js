// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

'use strict';

function findMultiples(integer, limit) {
  let multiplies = [integer];
  let lastDigit = multiplies[multiplies.length - 1];
  
  while(lastDigit + integer <= limit) {
    multiplies.push(lastDigit + integer);
    lastDigit = multiplies[multiplies.length - 1];
  }
  
  return multiplies;
}
