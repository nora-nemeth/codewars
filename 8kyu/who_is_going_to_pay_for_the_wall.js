// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7

'use strict';

const whoIsPaying = name => name.length <= 2 ? [name] : [name, name.substring(0, 2)];
