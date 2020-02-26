function twoNumberSum(array, targetSum) {
  // Write your code here.
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        newArr.push(array[i]);
        newArr.push(array[j]);
        break;
      }
    }
  }
  return newArr;
}
