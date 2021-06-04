// https://www.codewars.com/kata/5287e858c6b5a9678200083c

'use strict';

function narcissistic(value) {
  const numbers = value.toString().split('');
  let narcisstic = 0;
  
  for(const number of numbers) {
    narcisstic += Math.pow(number, numbers.length);
  }
  
  return value === narcisstic;
}
