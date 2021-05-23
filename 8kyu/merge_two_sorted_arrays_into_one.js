// https://www.codewars.com/kata/5899642f6e1b25935d000161

'use strict';

function mergeArrays(arr1, arr2) {
  const mergedSortedArray = arr1.concat(arr2).sort((a, b) => a - b);
  let noDuplicates = [];
  
  for(const number of mergedSortedArray) {
    if(!noDuplicates.includes(number)) {
      noDuplicates.push(number);
    }
  }

  return noDuplicates;
}
