/**
 * Question:
 * How would you capitalize the First letter in a string (show example)? 
 */

const aString = 'hello';

const bString = 'hello world';

const capitalize1 = string => string.slice(0, 1).toUpperCase() + string.slice(1);

// Technically capitalizing more than the first letter in the given string
const capitalize2 = string => string
  .split(' ')
  .map(str => str[0].toUpperCase() + str.slice(1))
  .join(' ');

const capitalize3 = (string, delimiter = ' ') => string
  .split(delimiter)
  .map(str => str[0].toUpperCase() + str.slice(1))
  .join(' ');