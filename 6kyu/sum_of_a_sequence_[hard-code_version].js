// https://www.codewars.com/kata/587a88a208236efe8500008b

'use strict';

function sequenceSum(begin, end, step) {
  if ((end - begin) / step <= 0 && end !== begin) {
    return 0;
  }
  end -= (end - begin) % step;
  const n = (end - begin) / step + 1;
  return n * (begin + end) / 2;
}
