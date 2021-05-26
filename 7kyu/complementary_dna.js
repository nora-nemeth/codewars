// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

'use strict';

const basePairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};

function DNAStrand(dna){
  let complementer = '';
  
  for(const nucleobase of dna) {
    complementer += basePairs[nucleobase];
  }
  
  return complementer;
}
