// https://www.codewars.com/kata/546f922b54af40e1e90001da

'use strict';

function alphabetPosition(string) {
  let result = [];

  for (const letter of string) {
    const letterIndex = letter.toLowerCase().charCodeAt();
    if (letterIndex >= 97 && letterIndex <= 122) {
      result.push(letterIndex - 96);
    }
  }

  return result.join(' ');
}
