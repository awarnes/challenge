// Write a function that takes a string, and returns the character that is
// most commonly used in the string.

const mostUsedCharacter = str => {
  if (str.length === 0) {
    return '';
  }

  const characterCount = str.split('').reduce((count, current) => {
    count[current] = (count[current] ? count[current] : 0) + 1;
    if (count[current])
    return count;
  }, {});

  let maxCount = 0;
  let maxCharacter = '';
  for (let key in characterCount) {
    if (characterCount[key] >= maxCount) {
      maxCount = characterCount[key];
      maxCharacter = key;
    }
  }

  return maxCharacter;
};

console.log(mostUsedCharacter('applesauce'));