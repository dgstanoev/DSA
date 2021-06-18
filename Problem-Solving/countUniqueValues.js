function countUniqueValues(sortedsortedArrayay) {
  let uniqueValuesObj = {};
  let uniqueValuesCount = 0;
  for (const value of sortedsortedArrayay) {
    if (!uniqueValuesObj[value]) {
      uniqueValuesObj[value] = 1;
      uniqueValuesCount++;
    }
  }
  console.log(uniqueValuesObj);
  return uniqueValuesCount;
}

countUniqueValues([1, 1, 1, 2, 3, 4, 5, 6]); // 6
countUniqueValues([1, 1, 1, 2]); // 2
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1, 2]); // 5

function countUniqueValues2(sortedsortedArrayay) {
  let k = 1;
  let j = 0;
  for (let i = 0; i < sortedsortedArrayay.length; i++) {
    if (sortedsortedArrayay[i] === sortedsortedArrayay[k]) {
      k++;
    } else {
      k++;
      j++;
    }
  }
  return j;
}

countUniqueValues2([1, 1, 1, 2, 3, 4, 5, 6]); // 6
countUniqueValues2([1, 1, 1, 2]); // 2
countUniqueValues2([]); // 0
countUniqueValues2([-2, -1, -1, 0, 1, 2, 12, 15, 15, 17]); // 8

function countUniqueValues3(sortedArray) {
  if (sortedArray.length === 0) return 0;
  let k = 0;
  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[k] !== sortedArray[i]) {
      k++;
      sortedArray[k] = sortedArray[i];
    }
  }
  return k + 1;
}
countUniqueValues3([1, 2, 2, 5, 7, 7, 99]); // 5
countUniqueValues3([1, 1, 1, 2, 3, 4, 5, 6]); // 6
countUniqueValues3([1, 1, 1, 2]); // 2
countUniqueValues3([]); // 0
countUniqueValues3([-2, -1, -1, 0, 1, 2, 12, 15, 15, 17]); // 8









