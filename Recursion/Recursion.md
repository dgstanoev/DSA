## Recursion
- What is recursion?
  - A process (a function in JavaScript) that calls itself
- Where is it used?
  - JSON.parse/JSON.stringify
  - document.getElementById and DOM traversal algorithms
  - Object raversal
  - Traverse data structures (trees, graphs)
  - It can be cleaner alternative to iteration  
- How recursive functions work?
  - Invoke the same function with a `different input` until `the base case` (the condition when the recursion ends) is reached. The different input and the base case are the two essential parts of a recursive function
#### Functions
  - In almost all programming languages, there is a built in data structure that manages what happens when functons are invoked. It is called stack (the **call stack** in JavaScript)
  - When a function is invoked, it is placed (pushed) on the top of the call stack
  - When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop)
  - When we write recursive functions, we keep pushing new functions(in fact the same function) onto the call stack