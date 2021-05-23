// https://www.codewars.com/kata/5715eaedb436cf5606000381

'use strict';

const positiveSum = arr => arr.filter(number => number > 0).reduce((a, c) => a + c, 0);
