## Performance of JavaScript Objects & Arrays
 ### Objects
#### When to use objects (unordered key-value pairs)?
- When you don't need order
- When you need fast access/insertion and removal

**Big O of objects**
  - Insertion - O(1)
  - Removal - O(1)
  - Searching - O(n) (checking to see if a piece of information is in a value)
  - Access - O(1) (key access)
    - Objects are an excellent choice when you don't need ordering

**Big O of object methods**
  - Object.keys - O(n) (visit every single key and adds it to an array)
  - Object.values - O(n)
  - Object.entries - O(n)
  - hasOwnProperty - O(1)
---
 ### Arrays
 #### When to use arrays (ordered lists)?
 - When you need order
 - When you need fast accesss / insertion and removal (sort of...)

 **Big O of Arrays**
  - Insertion - it depends... *O(1) for insertion at the end O(n) for insertion at the beginning/middle*
  - Removal - it depends... *O(1) for removal at the end O(n) for removal at the beginning/middle*
  - Searching - O(n)
  - Access - O(1) Algorithm: (n + (index * size) where `n` is the start memory address
    1. Elements are stored sequentially in memory
    2. Memory cells have the same size

**Big O of array methods**
  - push - O(1)
  - push - O(1)
  - shift - O(n)
  - unshift - O(n)
  - concat - O(n)
  - slice - O(n)
  - splice - O(n)
  - sort - O(n * log n  )
  - forEach, map, filter, reduce - O(n)