// O(1) space complexity
const sum = (array) => {
  let total = 0; // total one number
  for (let i = 0; i < array.length; i++) {
    // i, another number
    total += array[i];
  }

  return total;
};
sum([1, 2, 3, 4, 5]);

// O(n) - depends on the length of the input
const double = (array) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] * 2);
  }

  return newArray; // n numbers
};
console.log(double([1, 2, 3, 4, 6]));
