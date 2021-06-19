## Searching Algorithms
### Linear search
- It sequentially checks each element of the list until a match is found or the whole list has been searched. 
- Time complexity is O(n)
---
### Binary search
- Binary search is a much faster form of search
- Rather than eliminating one element at a time, you can eliminate *half* of the remaining elements at a time
- Binary search only works on sorted arrays
- Time complexity is O(log n)  

Pseudocode
  1. Create a function that accepts a sorted array (numbers only) and a value
  2. Create a left pointer at the start of the array, and a right pointer at the end of the array
  3. While the left pointer comes before the right pointer:
      - Create a pointer in the middle
      - If you find the value you want, return the index
      - If the value is too small, move the left pointer up
      - If the value is too large, move the right pointer down
  4. If you never find the value, return -1  
---
### String search
Pseudocode
  1. Define a function that takes two strings (longer string and pattern to look for)
  2. Loop over each character of the longer string
  3. Loop over the shorter string
  4. If the characters don't match, break out of the inner loop
  5. If the characters match, keep going
  6. If you complete the inner loop and find a match, increment the count of matches
  7. Return the count
