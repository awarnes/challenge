// Write a function that accepts an array of strings. Return the longest string.

// O(n log n)? w/e JS sort is
const longestString1 = values => {
  if (values.length === 0) {
    return null;
  }

  return values.sort((a, b) => b.length - a.length)[0];
};

console.log(longestString1(['a', 'bb', 'ccc']))

console.log(longestString1(['aaa', 'bbb', 'ccc']))

// O(n)
const longestString2 = values => {
  if (values.length === 0) {
    return null;
  }

  return values.reduce((longest, current) => {
    if (current.length > longest.length) {
      longest = current;
    }
    return longest;
  }, '');
};

console.log(longestString2(['a', 'bb', 'ccc']))

console.log(longestString2(['aaa', 'bbb', 'ccc']))

