// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b

'use strict';

String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}
