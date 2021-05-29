// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

'use strict';

function towerBuilder(floors) {
  const tower = [];
  for (let floor = 1; floor <= floors; floor++) {
    const stars = '*'.repeat(2 * floor - 1);
    const spaces = ' '.repeat(floors - floor);
    tower.push(`${spaces}${stars}${spaces}`);
  }
  return tower;
}
