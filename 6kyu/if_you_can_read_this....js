// https://www.codewars.com/kata/586538146b56991861000293

'use strict';

function to_nato(words) {
  let result = [];
  
  for(const char of words) {
    const currentChar = char.toLowerCase();
    if (currentChar in NATO) {
      result.push(NATO[currentChar]);
    }
    else if (char === ',' || char === '.' || char === '!' || char === '?') {
      result.push(char);
    }
  }
  
  return result.join(' ');
}
