// https://www.codewars.com/kata/551dc350bf4e526099000ae5

'use strict';

function songDecoder(song){
  const withoutWUB = song.replace(/WUB/g, ' ');
  
  let result = '';
  
  for (let i = 0; i < withoutWUB.length; i++) {
    if (withoutWUB[i] === ' ' && withoutWUB[i + 1] !== ' ') {
      result += withoutWUB[i];
    }
    else if (withoutWUB[i] !== ' ') {
      result += withoutWUB[i];
    }
  }
  
  return result.trim();
}
