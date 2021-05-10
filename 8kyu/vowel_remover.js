// https://www.codewars.com/kata/5547929140907378f9000039

'use strcict';

const vowels = ['a', 'e', 'i', 'o', 'u'];
const shortcut = string => string.split('').filter(letter => !vowels.includes(letter)).join('');
