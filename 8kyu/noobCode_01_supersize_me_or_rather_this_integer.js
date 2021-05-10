// https://www.codewars.com/kata/5709bdd2f088096786000008

'use strict';

function superSize(number) {
	const digits = number.toString().split('');
	const descendingDigits = digits.sort((a, b) => b - a);
	return Number(descendingDigits.join(''));
}
