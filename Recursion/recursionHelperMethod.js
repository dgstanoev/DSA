function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);

  return result;
}

function collectOddValuesPure(arr, memo = []) {
  if (arr.length === 0) return memo;
  if (arr[0] % 2 !== 0) memo.push(arr[0]);

  return collectOddValuesPure(arr.slice(1), memo);
}

console.log(collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


function collectOddValuesPure2(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValuesPure2(arr.slice(1)));
  return newArr;
}

collectOddValuesPure2([1, 2, 3, 4, 5]);
