// Create a function that takes in two strings as two parameters and returns a boolean
// that indicates whether or not the first string is an anagram of the second string.

const anagram = (...values) => {
  if (values.length < 2) return null;

  const cleanedValues = values.map(value => {
    const cleaned = value.replaceAll(/\W/g, '').toLowerCase();

    return cleaned.split('').sort().join('');
  });

  return cleanedValues.every(cleanedValue => cleanedValue === cleanedValues[0]);
};

console.log(anagram('apple', 'sauce')); // false
console.log(anagram('dormitory', 'dirty room')); // true
console.log(anagram('editor', 'redo it', 'die rot')); // true
console.log(anagram('brush', 'shrub')); // true
