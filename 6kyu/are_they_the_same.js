// https://www.codewars.com/kata/550498447451fbbd7600041c

'use strict';

function comp(numbers, squares){
  if(numbers === null || squares === null) {
    return false;
  }

  const multiplies = numbers.map(digit => Math.pow(digit, 2)).sort((a, b) => a - b).join('');

  return multiplies === squares.sort((a, b) => a - b).join('');
}

// arrow function solution

const comp = (numbers, squares) => (numbers === null || squares === null) ? false : numbers.map(digit => Math.pow(digit, 2)).sort((a, b) => a - b).join('') === squares.sort((a, b) => a - b).join('');
