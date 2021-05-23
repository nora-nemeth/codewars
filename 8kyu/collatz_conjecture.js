// https://www.codewars.com/kata/577a6e90d48e51c55e000217

'use strict';

var hotpo = function(n){
  if (n == 0) {
    return 0;
  }
  
  let reference = n;
  let counter = 0;
  
  while (reference > 1) {
    if (reference % 2 === 0) {
      reference = reference / 2;
      counter++;
    }
    else {
      reference = reference * 3 + 1;
      counter++;
    }
  }
  return counter;
}
