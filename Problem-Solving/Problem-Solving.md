## Problem Solving Approach

- What is an algorithm?
  - A process or set of steps to accomplish a certain task
- Problem solving strategy
  - Understand the problem
  - Explore concrete examples
  - Break it down
  - Solve/simplify
  - Look back and refactor

---

**Understand the problem**

1. Can I restate the problem in my own words?
2. What are the inputs that go into the problem?
3. What are the outputs that should come from the solution to the problem?
4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. That's okay, it's still worth considering the question at this early state.)
5. How should I label the important pieces of data that are part of the problem?

`EXAMPLE TASK: Write a function which takes two numbers and returns their sum.`

1. Can I restate the problem in my own words?
   - implement addition
2. What are the inputs that go into the problem?
   - integers? floats? string for large numbers?
3. What are the outputs that should come from the solution to the problem?
   integers? floats? string for large numbers?
4. Can the outputs be determined from the inputs?
   - Are we only working with two inputs?
   - What happens if someone leaves an input off? (do we add 0? do we return undefined, null)
   - What happens if someone adds four or ten numbers?
   - Are we allowed to pass in a float, integer, both, string?
5. How should I label the important pieces of data that are part of the problem?
   - Name the function add, numOne, numTwo, return sum

---

**Explore concrete examples**

- Start with simple examples
- Progress to more complex examples
- Exploring edge cases
  - Explore examples with empty inputs
  - Explore examples with invalid inputs

`EXAMPLE TASK: Write a function which takes in a string and returns counts of each character in the string.`

```js
// Simple examples
charCount('aaa'); // {a: 3} or {a: 3, b: 0, c: 0, d:...}
charCount('hello'); // {h: 1, e: 1, l: 2, o: 1}
// More complex examples
charCount('Good morning'); // do we store uppercase G and lowercase g together?, do we ignore casing?
charCount('my address number is 12'); // do we account for spaces, numbers, underscores, etc.
// Empty/invalid input
charCount(''); // what do we return null, false, {}, undefined, error
charCount([]); // what do we return null, false, {}, undefined, error
```

---

**Break it down**

- Explicitly write out the steps you need to take
  - This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details (e.g. language syntax) as well

`EXAMPLE TASK: Write a function which takes in a string and returns counts of each character in the string.`

```js
charCount('hello'); // {h: 1, e: 1, l: 2, o: 1}
charCount('my address number is 12'); // {1: 1, 2: 1, a: 1, b: 1, d: 2, e: 2, i: 1, m: 2, r: 1, s: 3}

// The function should return an object with keys that are lowercase alphanumeric characters in the string
// values should be the counts for those characters

function charCount(str) {
  // make object to return at end
  // loop over string
  // if char is a number/letter AND is a key in object, add one to count
  // if char is a number/letter AND NOT key in object, add it to object and set value to 1
  // if char is something else (space, period, underscore, etc.) don't do anything
  // return object at end
}
```

---

**Solve/simplify**

- If you can't solve the problem, solve a simpler problem
  - Try to ignore the part that is really giving you hard time in order to focus on everything else
  - Instead of getting stuck on one difficult part of a problem and making zero progress at all, it's just better to start writing code to do the stuff you know how to do
  - In symplifying a prolem, you'll gain insight into the actual solution into the harder part of the problem

Simplify

- Find the core difficulty in what you're trying to do
- Temporarily ignore that difficulty
- Write a simplified solution
- Then incorporate that difficulty back in

`EXAMPLE TASK: Write a function which takes in a string and returns counts of each character in the string.`

```js
function charCount(str) {
  // make object to return at end
  const result = {};
  // loop over string
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    // if char is a number/letter AND is a key in object, add one to count

    if (result[char]) {
      result[char] += 1;
    } else {
      // if char is a number/letter AND NOT key in object, add it to object and set value to 1
      result[char] = 1;
    }
  }
  // return object at end
  return result;
  // if char is something else (space, period, underscore, etc.) don't do anything
}
```

---

**Look back and refactor**

- Can you check the result?
- Can you derive the result differently?
- Can you understand it at a glance?
- Can you use the result or method for some other problem?
- Can you improve the performance of your solution?
- Can you think of other ways to refactor?
- How have other people solved this problem?

```js
// Version 1
function charCount(str) {
  const result = {};
  const pattern = /[a-z0-9]/;
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (pattern.test(char) && result[char]) {
      result[char] += 1;
    } else if (pattern.test(char) && !result[char]) {
      result[char] = 1;
    }
  }
  return result
}
charCount('Hi there 123!');

// Version 2
function charCount(str) {
  const result = {};
  const pattern = /[a-z0-9]/;

  for (let char of str) {
    char = char.toLowerCase();
    if (pattern.test(char) && result[char]) {
      result[char] += 1;
    } else if (pattern.test(char) && !result[char]) {
      result[char] = 1;
    }
  }

  return result
}

// Version 3
function charCount(str) {
  const result = {};
  const pattern = /[a-z0-9]/; // might not be optimal in terms of performance

  for (let char of str) {
        char = char.toLowerCase();
    if (pattern.test(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

// Version 4
function charCount(str) {
  const result = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
        char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) { // allegedly much faster (about 55%) than regular expression
    let code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && //numeric 0-9
        !(code > 64 && code < 91) && // upper alpha A-Z
        !(code > 96 && code < 123)) { // lower alpha a-z
        return false;
    }
    return true;
}
```
