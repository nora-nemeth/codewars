// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

'use strict';

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  
  let options = [['rock', 'scissors', 1], ['scissors', 'rock', 2], ['rock', 'paper', 2], ['paper', 'rock', 1], ['scissors', 'paper', 1], ['paper', 'scissors', 2]];
  
  for (const option of options) {
    if (p1 === option[0] && p2 === option[1]) {
      return `Player ${option[2]} won!`
    }
  }
}
