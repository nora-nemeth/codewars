// https://www.codewars.com/kata/55a2d7ebe362935a210000b2

'use strict';

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return [...args].sort((a, b) => a - b)[0];
  }
}
