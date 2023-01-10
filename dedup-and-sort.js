/**
 * Question:
 * Given array [5,6,7,24,24,109,5,13,0,3,1]
 * using Javascript:
 * - remove the duplicate values
 * - and sort in ascending order.
 */

const dedupAndSort = array => [...new Set(array)].sort((a, b) => a - b);

const question = [5, 6, 7, 24, 24, 109, 5, 13, 0, 3, 1];
const answer = [0, 1, 3, 5, 6, 7, 13, 24, 109];

assert(dedupAndSort(question).every((val, ind) => val === answer[ind]));