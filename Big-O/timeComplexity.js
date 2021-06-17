// O(n)
// Simple operations: As n grows, the number of operations grows (5n + 2), however, we care about the
// general trend, the number of operations grows roughly proportianally with n
const sumOfOneToNWithLoop = (n) => {
  let sum = 0; // 1 assignment
  for (let i = 0; i <= n; i++) { // single assignment, n comparisons, n assignments
    sum += i; // n additions, n assignments
  }

  return sum;
};
console.log(sumOfOneToNWithLoop(100));


// O(1)
// // Simple oprations: multiplication, addition, division - 3 in total, regardless of the size of n
const sumOfOneToNFormula = (n) => {
  const sum = (n * (n + 1)) / 2; 

  return sum;
};
console.log(sumOfOneToNFormula(50));


// O(n) - depends on the length of the input
const reverseString = (text) => {
  let reversedString = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversedString += text[i];
  }

  return reversedString;
};
console.log(reverseString('fish'));
