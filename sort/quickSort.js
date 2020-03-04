function quickSort(array) {
  //first number as picot
  //if left<pivot, left>>
  //if right>pivot, right<<
  //if left>pivot and right <pivot, swap left right
  //if leftidx>rightidx, swap pivot with right
  if (array.length <= 1) {
    return array;
  }
  let p = array.length - 1;
  let l = 0;
  let r = p - 1;
  while (l <= r) {
    if (array[l] > array[p] && array[r] < array[p]) {
      let help = array[l];
      array[l] = array[r];
      array[r] = help;
    }
    if (array[l] <= array[p]) {
      l++;
    }
    if (array[r] >= array[p]) {
      r--;
    }
  }
  let swap = array[l];
  array[l] = array[p];
  array[p] = swap;
  const left = array.slice(0, l);
  const right = array.slice(l);
  return quickSort(left).concat(quickSort(right));
}
