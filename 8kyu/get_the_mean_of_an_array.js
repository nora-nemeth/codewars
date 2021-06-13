// https://www.codewars.com/kata/563e320cee5dddcf77000158

'use strict';

const getAverage = marks => Math.floor(marks.reduce((a, c) => a + c, 0) / marks.length);
