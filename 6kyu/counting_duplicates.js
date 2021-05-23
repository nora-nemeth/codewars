// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

'use strict';

function duplicateCount(text){
  let array = text.split('').map(char => char.toLowerCase());
  
  let set = new Set;
  array.forEach(set.add, set);

  let counter = {};
  
  for(let value of set.values()) {
    counter[value] = 0;
  }

  for(const char of array) {
    if(char in counter) {
      counter[char] += 1;
    }
  }

  let values = Object.values(counter);

  let duplicates = values.filter(value => value > 1).length;

  return duplicates;
}
