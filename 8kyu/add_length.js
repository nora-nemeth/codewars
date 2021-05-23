// https://www.codewars.com/kata/559d2284b5bb6799e9000047

'use strict';

const addLength = string => string.split(' ').map(word => `${word} ${word.length}`);
