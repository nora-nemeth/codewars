// https://www.codewars.com/kata/52e1476c8147a7547a000811

'use strict';

function validate(password) {
  return /^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])[A-Za-z0-9]{6,}$/.test(password);
}
