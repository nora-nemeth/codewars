// https://www.codewars.com/kata/5626b561280a42ecc50000d1

'use strict';

function sumDigPow(a, b) { 
  let range = [];
  
  for(a; a <= b; a++) {
    const pows = a.toString().split('').map((digit, index) => Math.pow(digit, index + 1));
    const sumOfPows = pows.reduce((acc, curr) => acc + curr, 0);
    
    if(sumOfPows === a) {
      range.push(a);
    }
  }
  
  return range;
}
