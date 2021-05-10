// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029

'use strict';

function wave(string){
  let wave = [];

  for (let letterIndex = 0; letterIndex < string.length; letterIndex++) {
    if (string[letterIndex] === ' ') {
      continue;
    }
    else {
      const firstPart = string.slice(0, letterIndex);
      const lastPart = string.slice(letterIndex + 1, string.length);
      const currentWord = firstPart + string.slice(letterIndex, letterIndex + 1).toUpperCase() + lastPart;  
      wave.push(currentWord);
    }
  }

  return wave;
}
