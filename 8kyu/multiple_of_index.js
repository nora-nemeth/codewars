// https://www.codewars.com/kata/5a34b80155519e1a00000009

'use strict';

function multipleOfIndex(array) {
  let multiples = [];
  
  for(let i = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      multiples.push(array[i]);
    }
  }
  
  return multiples;
}
