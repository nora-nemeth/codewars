// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

'use strict';

function arrayMadness(a, b) {
  const sumOfSquares = a.map(num => Math.pow(num, 2)).reduce((a, c) => a + c, 0);
  const sumOfCubes = b.map(num => Math.pow(num, 3)).reduce((a, c) => a + c, 0);
  
  return sumOfSquares > sumOfCubes;
}
