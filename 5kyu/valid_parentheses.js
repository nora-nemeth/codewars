// https://www.codewars.com/kata/52774a314c2333f0a7000688

'use strict';

function validParentheses(parentheses) {
  let level = 0;
  for (const char of parentheses) {
    char === '('
      ? level++
      : level--;

    if (level < 0) {
      return false;
    }
  }
  return level === 0;
}
