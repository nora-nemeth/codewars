// https://www.codewars.com/kata/552c028c030765286c00007d

'use strict';

function iqTest(string) {
  const numbers = string.split(' ');
  
  const odds = numbers.filter(number => number % 2 !== 0);
  const evens = numbers.filter(number => !odds.includes(number));
  
  for(const number of numbers) {
    if (odds.length > evens.length) {
      if (number % 2 === 0) {
        return numbers.indexOf(number) + 1;
      }
    }
    else if (number % 2 !== 0) {
      return numbers.indexOf(number) + 1;
    }
  }
}
