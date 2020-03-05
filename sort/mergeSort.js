const merge = (arrA, arrB) => {
  let i = 0;
  let j = 0;
  // let k=0
  // let newArr = new Array(arrA.length+arrB.length)
  let newArr = [];
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] <= arrB[j]) {
      // newArr[k]=arrA[i]
      newArr.push(arrA[i]);
      console.log("first", arrA[i], newArr);
      i++;
    } else if (arrA[i] > arrB[j]) {
      // newArr[k]=arrB[j]
      newArr.push(arrB[j]);
      console.log("second", newArr);
      j++;
    }
    // k++
  }
  // let subArr
  if (i === arrA.length && j < arrB.length) {
    // subArr = arrB.slice(j)
    newArr = newArr.concat(arrB.slice(j));
  } else if (i < arrA.length && j === arrB.length) {
    // subArr = arrA.slice(i)
    newArr = newArr.concat(arrA.slice(i));
  }
  // for(let m=0; m<subArr.length;m++ ){
  // 	newArr[k]=subArr[m]
  // 	k++
  // }
  console.log("newArr", newArr);
  return newArr;
};

function mergeSort(bigArr) {
  if (bigArr.length <= 1) {
    return bigArr;
  }
  let midIndex = Math.floor(bigArr.length / 2);
  let left = bigArr.slice(0, midIndex);
  let right = bigArr.slice(midIndex);
  return merge(mergeSort(left), mergeSort(right));
}

// Do not edit the line below.
exports.mergeSort = mergeSort;
