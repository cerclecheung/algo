function moveElementToEnd(array, toMove) {
  // Write your code here.

  let toMoveIdx = 0;
  let ramdoIdx = array.length - 1;

  while (toMoveIdx < ramdoIdx) {
    if (array[toMoveIdx] === toMove && array[ramdoIdx] !== toMove) {
      let swap = array[toMoveIdx];
      array[toMoveIdx] = array[ramdoIdx];
      array[ramdoIdx] = swap;
    }
    if (array[toMoveIdx] !== toMove) {
      toMoveIdx++;
    }
    if (array[ramdoIdx] === toMove) {
      ramdoIdx--;
    }
  }
  return array;
}
