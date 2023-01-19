// An Armstrong number is an n-digit number that is equal to the sum of the nth
// nth powers of its digits. Determine if the input number is an Armstrong number.
// Return either true or false.

const armstrong = number => {
  return number === String(number).split('').reduce((total, current, _, array) => {
    total += parseInt(current, 10) ** array.length;
    return total
  }, 0);
};

console.log(armstrong(153)); // true
console.log(armstrong(243));