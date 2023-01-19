/**
 * Question:
 * What does the spread operator do in JS?
 */

/**
 * Answer:
 * The spread operator is used to explode or convert an iterable object into its individual
 * component pieces.
 */

const expand = array => console.log(...array);

// Returns 1, 2, 3, 4 as indiviual values
expand([1, 2, 3, 4]);

// This could be used to convert a string into an array of its characters
// -> ['H', 'e', 'l', 'l','o', ',', ' ', 'w','o', 'r', 'l', 'd','!']
console.log([...'Hello, world!']);

// Often this is used to expand an array into the arguments of a function
const addThenMultiply = (add1, add2, multiply) => (add1 + add2) * multiply;

const inputs = [1, 2, 3];
// -> 9
console.log(addThenMultiply(...inputs));

// We can also use the spread operator to merge objects together
const defaults = {a: 1, b: 2};
const overrides = {b: 3, c: 4};
// > {a: 1, b: 3, c: 4}
const merged = {...defaults, ...overrides}