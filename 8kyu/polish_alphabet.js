// https://www.codewars.com/kata/57ab2d6072292dbf7c000039

'use strict';

const diacritics = {
  'ą': 'a',
  'ć': 'c',
  'ę': 'e',
  'ł': 'l',
  'ń': 'n',
  'ó': 'o',
  'ś': 's',
  'ź': 'z',
  'ż': 'z'
};

function correctPolishLetters (string) {
  let resultString = '';
  for(letter of string) {
    letter in diacritics ? resultString += diacritics[letter] : resultString += letter;
  }
  return resultString;
}
