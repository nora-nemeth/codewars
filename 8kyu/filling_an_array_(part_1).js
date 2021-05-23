// https://www.codewars.com/kata/571d42206414b103dc0006a1

'use strict';

const arr = N => Array.from(filler(N));

function filler(n) {
  let filledArr = [];
  for(let i = 0; i < n; i++) {
    filledArr.push(i);
  }
  return filledArr;
}
