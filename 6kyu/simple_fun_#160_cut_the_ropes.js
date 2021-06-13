// https://www.codewars.com/kata/58ad388555bf4c80e800001e

'use strict';

function cutTheRopes(ropes) {
  ropes = ropes.sort((a, b) => a - b);
  const result = [];
  let remaining = ropes.length;
  let count = 1;
  for (let i = 0; i < ropes.length; ++i) {
    if (i === ropes.length - 1 || ropes[i] != ropes[i + 1]) {
      result.push(remaining);
      remaining -= count;
      count = 1;
    }
    else {
      ++count;
    }
  }
  return result;
}
