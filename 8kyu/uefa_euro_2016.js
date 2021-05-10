// https://www.codewars.com/kata/57613fb1033d766171000d60

'use strict';

function uefaEuro2016(teams, scores){
  const isDraw = scores[0] === scores[1];
  const winnerIndex = scores[0] > scores[1] ? 0 : 1;

  const outcomeMessage = isDraw
    ? 'teams played draw.'
    : `${teams[winnerIndex]} won!`;

  return `At match ${teams[0]} - ${teams[1]}, ${outcomeMessage}`;
}
