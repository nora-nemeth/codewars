// https://www.codewars.com/kata/5a7f58c00025e917f30000f1

'use strict';

function longest(string) {
  if (string.length < 2) {
    return string;
  }
  
  let subStrings = [];
  let currentSubString = string[0];
  
  for(let i = 1; i < string.length; i++) {
    if (currentSubString.charCodeAt(currentSubString.length - 1) <= string.charCodeAt(i)) {
      currentSubString += string[i];
    }
    else {
      subStrings.push(currentSubString);
      currentSubString = string[i];
    }
    subStrings.push(currentSubString);
  }
  
  let longestSubString = subStrings[0];
  
  for(const subString of subStrings) {
    if(longestSubString.length < subString.length) {
      longestSubString = subString; 
    }
  }

  return longestSubString;
}
