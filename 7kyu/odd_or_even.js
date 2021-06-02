// https://www.codewars.com/kata/5949481f86420f59480000e7

'use strict';

const oddOrEven = numbers => numbers.reduce((a, c) => a + c, 0) % 2 === 0 ? 'even' : 'odd';
