// Given a string possibly containing three types of braces ({}, [], ()),
// write a function that returns a Boolean indicating whether the given string
// contains a valid nesting of braces.

const balancedBrackets = str => {
  const LEFT = ['(', '[', '{'];
  const RIGHT = [')', ']', '}'];
  const check = [];

  for (let i = 0; i < str.length; i++) {
    if (LEFT.includes(str[i])) {
      check.push(str[i]);
    } else if (RIGHT.includes(str[i])) {
      if (!check.length) {
        return false;
      }
      // Could use hashtable to speed up
      if (LEFT.indexOf(check.pop()) !== RIGHT.indexOf(str[i])) {
        return false;
      }
    }
  }
  return check.length === 0;
};

console.log(balancedBrackets('[][()')); // true
console.log(balancedBrackets('([)]')); // false
console.log(balancedBrackets('{()[]}')); // true
console.log(balancedBrackets('[(a)f]cb')); // true