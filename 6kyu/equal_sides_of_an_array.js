// https://www.codewars.com/kata/5679aa472b8f57fb8c000047

'use strict';

function findEvenIndex(numbers) {
  if (numbers.slice(1).reduce((a, c) => a + c, 0) === 0){
    return 0;
  }
  
  for(let i = 1; i < numbers.length; i++) {
    if (numbers.slice(0, i).reduce((a, c) => a + c, 0) === numbers.slice(i + 1).reduce((a, c) => a + c, 0)) {
      return i;
    }
  }
  
  return -1;
}
