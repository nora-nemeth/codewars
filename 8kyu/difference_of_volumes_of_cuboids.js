// https://www.codewars.com/kata/58cb43f4256836ed95000f97

'use strict';

function findDifference(a, b) {
  const aCuboidVolume = a.reduce((a, c) => a * c);
  const bCuboidVolume = b.reduce((a, c) => a * c);
  return aCuboidVolume > bCuboidVolume
    ? aCuboidVolume - bCuboidVolume
    : bCuboidVolume - aCuboidVolume;
}
