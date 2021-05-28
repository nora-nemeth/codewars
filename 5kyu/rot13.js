// https://www.codewars.com/kata/530e15517bc88ac656000716

'use strict';

function rot13(message){
  let cipher = '';
  
  for(const char of message) {
    const asciiCode = char.charCodeAt();

    if (asciiCode >= 65 && asciiCode <= 90) {
      if (asciiCode <= 77) {
        cipher += String.fromCharCode(asciiCode + 13); 
      }
      else if (asciiCode > 77) {
        cipher += String.fromCharCode(asciiCode - 13);
      }
    }
    
    else if (asciiCode >= 97 && asciiCode <= 122) {
      if (asciiCode <= 109) {
        cipher += String.fromCharCode(asciiCode + 13); 
      }
      else if (asciiCode > 109) {
        cipher += String.fromCharCode(asciiCode - 13);
      }
    }
    
    else if (asciiCode >= 32 && asciiCode <= 64) {
      cipher += char;
    }
  }
  
  return cipher;
}
