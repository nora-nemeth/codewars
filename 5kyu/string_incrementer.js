// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

'use strict';

function incrementString(string) {
  if (string == '') {
    return '1';
  }
  
  const extracted = string.match(/(\d+)$/);
  
  if (extracted == null) {
    return string + 1;
  }
  
  const extractedNum = string.match(/(\d+)$/)[0];
  
  const incrementedNum = parseInt(extractedNum, 10) + 1;
  const padded = incrementedNum.toString().padStart(extractedNum.length, '0');
  const incrementedString = string.slice(0, -extractedNum.length) + padded;
    
  return incrementedString;
}
