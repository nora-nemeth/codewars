// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

'use strict';

function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  string = string.toLowerCase().split('').sort().filter(letter => alphabet.includes(letter)).join('').trim();
  
  let panagram = ''
  
  for(const letter of string) {
    if (!panagram.includes(letter)) {
      panagram += letter;
    }
  }
  
  return panagram === alphabet;
}
