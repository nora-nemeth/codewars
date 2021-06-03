// https://www.codewars.com/kata/58b38256e51f1c2af0000081

'use strict';

function bestMatch(alahlyGoals, zamalekGoals) {
  let bestIndex = 0;
  let bestDifference = Infinity;
  let bestScore = -Infinity;
  
  for (let index = 0; index < alahlyGoals.length; index++) {
    const difference = alahlyGoals[index] - zamalekGoals[index];
    const score = zamalekGoals[index];
    if (difference < bestDifference) {
      bestIndex = index;
      bestDifference = difference;
      bestScore = score;
    }
    else if (difference === bestDifference && score > bestScore) {
      bestIndex = index;
      bestScore = score;
    }
  }
  
  return bestIndex;
}
