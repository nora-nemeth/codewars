// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

'use strict';

// const removeChar = string => string.slice(1, string.length - 1);
const removeChar = s => s.replace(/(?<=^).|.(?=$)/g, '');
