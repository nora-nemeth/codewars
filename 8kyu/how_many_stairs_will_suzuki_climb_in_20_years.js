// https://www.codewars.com/kata/56fc55cd1f5a93d68a001d4e

'use strict';

const stairsIn20 = stairs => stairs.map(days => days.reduce((a, c) => a + c)).reduce((a, c) => a + c)*20;
