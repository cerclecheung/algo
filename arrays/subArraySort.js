function subarraySort(array) {
  // [1,2,4,7,10,11,7,12,6,7,16,18,19]
  // find outofplacemin,
  // 	when 7>11 outofplacemin=7
  // 	when 6>12 outofplacemin=6
  let outOfPlaceMin = Infinity;
  let minCount = 0;
  let outOfPlaceMax = -Infinity;
  let maxCount = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1] && array[i] < outOfPlaceMin) {
      outOfPlaceMin = array[i];
      minCount = 1;
    } else if (array[i] === outOfPlaceMin) {
      minCount++;
    }
  }
  // likewise,find outofplaceMax
  // 	when 12>6 outofplaceMax=12
  for (let j = array.length - 2; j >= 0; j--) {
    if (array[j] > array[j + 1] && outOfPlaceMax < array[j]) {
      outOfPlaceMax = array[j];
      maxCount = 1;
    } else if (array[j] === outOfPlaceMax) {
      maxCount++;
    }
  }
  console.log(outOfPlaceMin, outOfPlaceMax, minCount, maxCount);
  //find where is the new home for max and min
  if (outOfPlaceMin === Infinity) {
    return [-1, -1];
  } else {
    let left = 0;
    let right = array.length - 1;
    for (let i = 0; i < array.length - 1; i++) {
      console.log(i, array[i] <= outOfPlaceMin, outOfPlaceMin < array[i + 1]);
      if (array[i] <= outOfPlaceMin && outOfPlaceMin < array[i + 1]) {
        console.log("hitleft");
        left = i + 1;
        break;
      }
    }
    for (let j = array.length - 2; j >= 0; j--) {
      console.log("right", right, j);
      if (
        array[j] < outOfPlaceMax &&
        outOfPlaceMax <= array[j + 1] &&
        j + 1 !== array.indexOf(outOfPlaceMax)
      ) {
        console.log("hitright");
        right = j;
        break;
      }
    }
    console.log(left, right);
    return [left, right];
  }
}
