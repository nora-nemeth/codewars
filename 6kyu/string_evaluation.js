// https://www.codewars.com/kata/57f548337763f20e02000114

'use strict';

function string_evaluation(string, conditions) {
  let counter = {};

  for(const char of string) {
    if (char in counter) {
      counter[char] += 1;
    }
    else {
      counter[char] = 1;
    }
  }

  let evaluated = [];

  for(const condition of conditions) {
    const leftOperand = condition[0];
    const rightOperand = condition[condition.length -1];
    const leftSide = !isNaN(leftOperand) ? leftOperand : counter[leftOperand];
    const rightSide = !isNaN([rightOperand]) ? [rightOperand] : counter[[rightOperand]];
    const operation = condition.slice(1, -1);

    evaluated.push(eval(`${leftSide} ${operation} ${rightSide}`));
  }

  return evaluated;
}
