// Given an array of objects, sort the objects by population size. Return the entire object.

const sortByPopulation = (...popObjects) => popObjects.sort((a, b) => a.population - b.population);

console.log(sortByPopulation({population: 1}, {population: 3}, {population: 2}));
console.log(sortByPopulation({population: 13}, {population: 23}, {population: 128}));
console.log(sortByPopulation({population: 167}, {population: 4}, {population: 82}));