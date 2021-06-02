// https://www.codewars.com/kata/526571aae218b8ee490006f4

'use strict';

const countBits = decimal => Number(decimal).toString(2).split('').map(Number).filter(digit => digit === 1).length;
