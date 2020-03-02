function insertionSort(array) {
  let i = 0; //sorted array last index
  while (i < array.length) {
    let j = i + 1;
    while (j > 0) {
      if (array[j] < array[j - 1]) {
        let swap = array[j];
        array[j] = array[j - 1];
        array[j - 1] = swap;
      }
      j--;
    }
    i++;
  }
  return array;
  // Write your code here.
}
