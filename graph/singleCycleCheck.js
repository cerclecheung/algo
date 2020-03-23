function hasSingleCycle(array) {
  // Write your code here.
  let trackArray = [];
  let currentIdx = 0;
  while (trackArray.length < array.length) {
    if (!trackArray.includes(currentIdx) && array[currentIdx] !== 0) {
      trackArray.push(currentIdx);
      currentIdx = helper(array.length, currentIdx + array[currentIdx]);
    } else {
      return false;
    }
  }
  if (currentIdx === 0) {
    return true;
  } else {
    return false;
  }
}
function helper(length, newIdx) {
  if (newIdx > length - 1 || newIdx < 0) {
    let mod = newIdx % length;
    if (mod < 0) {
      mod = mod + length;
    }
    return mod;
  }
  return newIdx;
}
