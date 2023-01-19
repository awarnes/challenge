/**
 * Given a NxM grid where each node is a direction
 * and a START and END determine whether the
 * END is accessible from the START by following the directions
 */

// 4x3

// hasPath => true
const testGrid1 = [
  ['>', '>', 'V'],
  ['>', '^', 'V'],
  ['V', '<', '<'],
  ['>', '>', 'V'],
];

// hasPath => false (small loop)
const testGrid2 = [
  ['>', '>', '<'],
  ['>', '^', 'V'],
  ['V', '<', '<'],
  ['>', '>', 'V'],
];

// hasPath => false (large loop)
const testGrid3 = [
  ['>', '>', 'V'],
  ['>', '^', '<'],
  ['V', '<', '<'],
  ['>', '>', 'V'],
];

// hasPath => false (off grid)
const testGrid4 = [
  ['>', '>', 'V'],
  ['>', '^', 'V'],
  ['<', '<', '<'],
  ['>', '>', 'V'],
];

const testStart1 = [0, 0];
const testEnd1 = [3, 2];

const hasPath = (start, end, grid) => {
  let current = start;
  let visited = [];

  while (current[0] !== end[0] || current[1] !== end[1]) {
    visited.push(current);
    const direction = grid[current[0]][current[1]];
    current = moveOnPath(current, direction);

    // if off grid, break
    if ((current[0] < 0 || current[0] === grid.length) ||
      (current[1] < 0 || current[1] === grid[0].length)
    ) {
      break;
    }

    // if already visted, break
    if (visited.some(node => node[0] === current[0] && node[1] === current[1])) {
      break;
    }
  }

  return current[0] === end[0] && current[1] === end[1];
};

const moveOnPath = (current, direction) => {
  switch (direction) {
    case '>':
      return [current[0], current[1] + 1];
    case '<':
      return [current[0], current[1] - 1];
    case '^':
      return [current[0] - 1, current[1]];
    case 'V':
      return [current[0] + 1, current[1]];
  }
};

console.log(hasPath(testStart1, testEnd1, testGrid1))
console.log(hasPath(testStart1, testEnd1, testGrid2))
console.log(hasPath(testStart1, testEnd1, testGrid3))
console.log(hasPath(testStart1, testEnd1, testGrid4))