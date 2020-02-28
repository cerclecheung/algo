function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let diff = Infinity;
  let i = 0;
  let j = 0;
  let returnArray = [];
  while (i < arrayOne.length && j < arrayTwo.length) {
    let newDiff = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (newDiff < diff) {
      returnArray = [arrayOne[i], arrayTwo[j]];
      diff = newDiff;
    }
    if (arrayOne[i] < arrayTwo[j]) {
      i++;
    } else if (arrayOne[i] > arrayTwo[j]) {
      j++;
    } else {
      break;
    }
  }
  return returnArray;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
