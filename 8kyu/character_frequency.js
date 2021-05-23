// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2

'use strict';

function charFreq(message) {
  let dictionary = {};
  
  for(const char of message)  {
    char in dictionary ? dictionary[char] += 1 : dictionary[char] = 1;
  }
  
  return dictionary;
}
