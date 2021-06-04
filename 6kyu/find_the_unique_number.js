// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

'use strict';

function findUniq(numbers) {
  let a = numbers[0];
  let b;
  let aCounter = 1;
  let bCounter = 0;
  
  for(const digit of numbers) {
    if (digit !== a) {
      b = digit;
      bCounter++;
    }
    else {
      aCounter++;
    }
  }
  
  return aCounter > bCounter ? b : a;
}
