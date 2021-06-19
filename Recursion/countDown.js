// Simple example of recursive function
function countDown(num = 3) {
  if (num === 0) {
    console.log('Finished counting');
    return;
  }
  // console.log(num);
  num--;
  countDown(num);
}

countDown();



// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

// console.log(sumRange(10));
