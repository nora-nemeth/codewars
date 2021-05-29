// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272

'use strict';

const alphabet = '_abcdefghijklmnopqrstuvwxyz'.split('');

const add = (a, b) => a + b;

function score(word) {
  return word.split('')
    .map(char => alphabet.indexOf(char))
    .reduce(add);
}

function higherScoring(word1, word2) {
  return score(word1) < score(word2)
    ? word2
    : word1;
}

function high(words){
  return words.split(' ')
    .reduce(higherScoring);
}