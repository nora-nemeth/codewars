// https://www.codewars.com/kata/51b6249c4612257ac0000005

'use strict';

const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

function solution(roman){
  if (roman in romanNumerals) {
    return romanNumerals[roman];
  }
  
  let decimal = 0;
  
  for(let i = 0; i < roman.length; i++) {    
    if (romanNumerals[roman[i]] >= romanNumerals[roman[i + 1]]) {
      decimal += romanNumerals[roman[i]];
    }
     
    else if (romanNumerals[roman[i]] < romanNumerals[roman[i - 1]]) {
      decimal += romanNumerals[roman[i]];
    }
    
    else if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
      decimal += (romanNumerals[roman[i + 1]] - romanNumerals[roman[i]]);
      i++;
    }
    else {
      decimal += romanNumerals[roman[i]];
    }
  }
  
  return decimal;
}
