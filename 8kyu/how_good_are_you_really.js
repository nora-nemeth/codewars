// https://www.codewars.com/kata/5601409514fc93442500010b

'use strict';

const betterThanAverage = (classPoints, yourPoints) => (classPoints.reduce((a, c) => a + c) / classPoints.length) < yourPoints;
