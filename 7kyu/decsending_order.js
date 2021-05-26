// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

'use strict';

const descendingOrder = num => Number(num.toString().split('').map(str => Number(str)).sort((a, b) => b - a).join(''));
