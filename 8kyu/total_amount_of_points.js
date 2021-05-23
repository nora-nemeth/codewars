// https://www.codewars.com/kata/5bb904724c47249b10000131

'use strict';

function points(games) {
  let points = 0;
  
  for (const scores of games) {
    scores[0] > scores[2] 
    ? points += 3
    : scores[0] < scores[2]
    ? points += 0
    : points += 1;
  }
  
  return points;
}
