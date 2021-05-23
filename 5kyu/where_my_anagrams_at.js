// https://www.codewars.com/kata/523a86aa4230ebb5420001e1

'use strict';

const sortString = string => string.split('').sort().join('');

function areAnagrams(word1, word2) {
  return sortString(word1) === sortString(word2);
}

function anagrams(target, words) {
  return words.filter(word => areAnagrams(word, target));
}
