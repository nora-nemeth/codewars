// https://www.codewars.com/kata/550554fd08b86f84fe000a58

'use strict';

function inArray(A,B){
  let areIn = [];
  
  for(const a of A) {
    for(const b of B) {
      if (b.includes(a) && !areIn.includes(a)) {
        areIn.push(a);
      }
    }
  }
  
  return areIn.sort();
}
