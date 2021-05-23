// https://www.codewars.com/kata/577bd026df78c19bca0002c0

'use strict';

const mistakes = {
  5: 'S',
  0: 'O',
  1: 'I'
}

function correct(string) {
  let corrected = '';

  for (const char of string) {
    corrected += char in mistakes ? mistakes[char] : char;
  }

  return corrected;
}
