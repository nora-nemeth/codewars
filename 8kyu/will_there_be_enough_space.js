// https://www.codewars.com/kata/5875b200d520904a04000003

'use strict';

const enough = (cap, on, wait) => on + wait < cap ? 0 : wait - (cap - on);
