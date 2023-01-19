// Given a string, write a function that will return whether or not that string is a palindrome.

const palindrome = str => {
  const cleanedString = str.replaceAll(/\W/g, '').toLowerCase();
  const reversed = cleanedString.split('').reverse().join('');
  return cleanedString === reversed;
  // for (let i = 0; i <= cleanedString.length / 2; i++) {
  //   if (cleanedString[i] != cleanedString[cleanedString.length - 1 - i]) {
  //     return false
  //   }
  // }
  // return true;
};

console.log(palindrome('apple')); // false
console.log(palindrome('ABBA')); // true
console.log(palindrome('A man, a plan, a canal -- Panama!')); // true