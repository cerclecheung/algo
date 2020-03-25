function fourNumberSum(array, targetSum) {
  let sourtedArr = array.sort((a, b) => a - b);
  let outSumArr = [];
  for (let outLeft = 0; outLeft < array.length; outLeft++) {
    for (let outRight = outLeft + 3; outRight < array.length; outRight++) {
      let inLeft = outLeft + 1;
      let inRight = outRight - 1;
      while (inLeft < inRight) {
        let currentSum =
          sourtedArr[inLeft] +
          sourtedArr[inRight] +
          sourtedArr[outLeft] +
          sourtedArr[outRight];
        if (currentSum === targetSum) {
          outSumArr.push([
            sourtedArr[inLeft],
            sourtedArr[inRight],
            sourtedArr[outLeft],
            sourtedArr[outRight]
          ]);
          inLeft++;
          inRight--;
        } else if (currentSum < targetSum) {
          inLeft++;
        } else if (currentSum > targetSum) {
          inRight--;
        }
      }
    }
  }
  return outSumArr;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
