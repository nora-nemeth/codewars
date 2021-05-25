// https://www.codewars.com/kata/53f0f358b9cb376eca001079

'use strict';

const Ball = function(ballType) {
  if (ballType === undefined) {
    return this.ballType = "regular";
  }
  else {
    return this.ballType = ballType;
  }
};
