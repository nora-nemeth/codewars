// https://www.codewars.com/kata/572b77262bedd351e9000076

'use strict';

function first(arr, n) {
  if (n === undefined) {
    return [arr[0]];
  }
  
  let sequence = [];
  
  for(let i = 0; i < n && i < arr.length; i++) {
    sequence.push(arr[i]);
  }
  
  return sequence;
}
