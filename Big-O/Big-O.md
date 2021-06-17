## Big O

- A way of generalizing and comparing code and its performance to other pieces of code
- Measures code efficiency
  1. Different machines with record different times
  2. The same machine with record different times
  3. For fast algorithms, speed measurements may not be precise enough
  - As a result, we want to assign a value to be able to talk about how code compares to other code in general terms
  - The solution is to count the number of simple operations the computer has to perform instead of counting seconds/milliseconds
- Allows us to talk formally about how the runtime of an algorithm grows as the input grow (*time complexity*)
- When we talk about Big O, we talk about the worst-case scenario
---
Time complexity
- We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases  
**(f(n)=n) - function with input n and output n, describes relationship between the input and the runtime**
  - f(n) could be linear (f(n)=n) 
  - f(n) could be quadratic (f(n)=n^2)
  - f(n) could be constant (f(n)=1)
  - f(n) could be something entirely different
---
- Simplifying Big O expressions:  
Constants don't matter
  - O(2n) => O(n)
  - O(500) => O(1)
  - O(13n^2) => O(n^2)

  Smaller terms don't matter
  - O(n+10) => O(n)
  - O(1000n + 50) => O(n)
  - O(n^2 + 5n + 8) => O(n^2)
---
- Big O shorthands
  1. Arithmetic operations are constant
  2. Variable assignment is constant
  3. Accessing elements in an array (by index) or object (by key) is constant
  4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
---
- Space complexity - how much additional memory do we need to allocate in order to run the code in our algorithm
  - (Auxiliary) space complexity refers to space required by the algorithm, not including space taken up the inputs  
  
  Rules of thumb (Space complexity in JavaScript):
  - Most primitives (booleans, numbers, undefined, null) are constant space
  - Strings require O(n) space (where `n` is the string length)
  - Reference types are generally O(n), where `n` is the length (for arrays) or the number of keys (for objects)
---
What is a logarithm?
 - Logarithm is the inverse of exponentiation. Just as division and multiplication are paired, logarithms and exponentiation are paired  
    - log2(8) = 3 - what we calculate here is 2 to what power equals 8 (2^3 = 8)  
    - log2(value) = exponent =======> 2^exponent = value (log base can be 2 (most common), 3, 10 etc.)
    - we'll omit the 2, log === log2
 - The logarithm of a number roughly measures the number of times you can divide that number by 2 **before you get a value that's less than or equal to one** 
 - Certain searching algorithms have logarithmic time complexity
 - Efficient sorting algorithms involce logarithms
 - Recursion sometimes involves logarithmic space complexity
 ---
 Recap
 - To analyze the performance of an algorithm, we use Big O Notation
 - Big O Notation can give us a high level understanding of the time and space complexity of an algorithm
 - Big O Notation doesn't care about precision, only about general trends (linear? quadratic? constant?)
 - The time or space complexity (as measured by Big O) depends only on the algorithm, not the hardware used to run the algorithm 
