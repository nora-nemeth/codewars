// https://www.codewars.com/kata/57eae65a4321032ce000002d

'use strict';

const toBinary = digit => digit < 5 ? 0 : 1;
const fakeBin = string => string.split('').map(toBinary).join('');
