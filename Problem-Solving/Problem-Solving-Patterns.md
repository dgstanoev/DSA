## Problem Solving Patterns

### Frequency counters

- This pattern uses objects or sets to collect values/frequencies of values
- This can often avoid the need for nested loops or O(n^2) operations with arrays/strings

**EXAMPLE TASK: Write a function called `same`, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.**

```js
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)

// Naive solution O(n^2)
function same(arr1, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// Refactored solution O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let value of arr1) {
    frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
  }
  for (let value of arr2) {
    frequencyCounter1[value] = (frequencyCounter2[value] || 0) + 1;
  }
   for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2]) !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
```

---

### Multiple pointers

- Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.
- Very efficient for solving problems with minimal space complexity as well

**EXAMPLE TASK: Write a function called `sumZero`, which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.**

```js
// Naive solution Time complexity - O(n^2), Space complexity - O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

// Refactored solution Time compleity - O(n), Space complexity O(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

---

### Sliding windows

- This pattern involves a window which can either be an array or number from one position to another
  - Depending on a certain condition, the window either increases or closes (and a new window is created)
- Very useful for keeping track of a subset of data in an array/string etc.

**EXAMPLE TASK: Write a function called `maxSubarraySum`, which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutive elements in the array.**

```js
// Naive solution Time complexity - O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// Refactored solution Time complexity - 0(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

---

### Divide and conquer

- This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity.

**EXAMPLE TASK: Given a _sorted_ array of integers, write a function called `search`, that accepts a value and returns the index where the value passed to the function is located. If the value is not found retun -1.**

```js
// Naive solution Time complexity - O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

// Refactored solution Time complexity - O(log n)
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > value) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```
