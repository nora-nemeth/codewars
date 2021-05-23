// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

'use strict';

const reverseSeq = n => {
  const descending = [];
  for (let i = n; i > 0; i--) {
    descending.push(i)
  }
  return descending;
};
