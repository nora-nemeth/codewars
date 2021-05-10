// https://www.codewars.com/kata/55c45be3b2079eccff00010f

'use strict';

function order(words){
  let wordsArray = words.split(' ');
  let finalOrder = [];
  let compareValue = 0;

  for (let i = 0; i < wordsArray.length; i++) {
    for(const word of wordsArray) {
      for(const letter of word) {
        if (Number(letter) === compareValue + 1) {
          finalOrder.push(word);
          compareValue++;
        }
      }
    }  
  }

  return finalOrder.join(' ');
}
