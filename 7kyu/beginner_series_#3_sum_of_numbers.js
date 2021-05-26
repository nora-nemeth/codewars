// https://www.codewars.com/kata/55f2b110f61eb01779000053

'use strict';

function getSum(a, b) {
  let between = [];
  
  if (a > b) {
    for(a; a >= b; a--) {
      between.push(a);
    }
  }
  
  else if (a < b) {
    for(a; a <= b; a++) {
      between.push(a);
    }
  }
  
  else if (a === b) {
    return a;
  }
  
  return between.reduce((a, c) => a + c, 0);
}
