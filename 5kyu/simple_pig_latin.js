// https://www.codewars.com/kata/520b9d2ad5c005041100000f

'use strict';

function pigWord(word) {
  return /^\w*$/g.test(word)
    ? `${word.slice(1)}${word[0]}ay`
    : word;
}

function pigIt(string) {
  return string.split(' ')
    .map(pigWord)
    .join(' ');
}
