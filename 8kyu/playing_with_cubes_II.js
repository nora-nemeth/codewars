// https://www.codewars.com/kata/55c0ac142326fdf18d0000af

'use strict';

function Cube(n) {
  var side = 0;
  
  this.getSide = function() { return side; };
  this.setSide = function(n) {
    if (isNaN(n) === true) { return; }
    side = Math.abs(n);
  };
}
