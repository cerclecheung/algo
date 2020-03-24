function riverSizes(matrix) {
  // 	outside array to keep track of all the river nodes that we checked
  const checkedArr = [];
  const outsideCounter = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1 && !checkedArr.includes(`${i}:${j}`)) {
        let nextOneArr = [[i, j]];
        let insideCounter = 0;
        checkedArr.push(`${i}:${j}`);
        while (nextOneArr.length > 0) {
          let rowIdx = nextOneArr[0][0];
          let colIdx = nextOneArr[0][1];
          let validChildren = helper(matrix, rowIdx, colIdx, checkedArr);
          validChildren.forEach(ele => {
            checkedArr.push(`${ele[0]}:${ele[1]}`);
          });
          nextOneArr = nextOneArr.concat(validChildren);
          nextOneArr.shift();
          insideCounter++;
        }
        outsideCounter.push(insideCounter);
      }
    }
  }
  return outsideCounter;
}
const helper = (matrix, row, col, checkedArr) => {
  let neighbors = [];
  let rowBoundary = matrix.length;
  let colBoundary = matrix[0].length;
  let newRow = row + 1;
  let newCol = col;
  if (
    newCol < colBoundary &&
    newCol >= 0 &&
    newRow >= 0 &&
    newRow < rowBoundary &&
    matrix[newRow][newCol] === 1 &&
    !checkedArr.includes(`${newRow}:${newCol}`)
  ) {
    neighbors.push([newRow, newCol]);
  }
  newRow = row - 1;
  if (
    newCol < colBoundary &&
    newCol >= 0 &&
    newRow >= 0 &&
    newRow < rowBoundary &&
    matrix[newRow][newCol] === 1 &&
    !checkedArr.includes(`${newRow}:${newCol}`)
  ) {
    neighbors.push([newRow, newCol]);
  }
  newRow = row;
  newCol = col + 1;
  if (
    newCol < colBoundary &&
    newCol >= 0 &&
    newRow >= 0 &&
    newRow < rowBoundary &&
    matrix[newRow][newCol] === 1 &&
    !checkedArr.includes(`${newRow}:${newCol}`)
  ) {
    neighbors.push([newRow, newCol]);
  }
  newCol = col - 1;
  if (
    newCol < colBoundary &&
    newCol >= 0 &&
    newRow >= 0 &&
    newRow < rowBoundary &&
    matrix[newRow][newCol] === 1 &&
    !checkedArr.includes(`${newRow}:${newCol}`)
  ) {
    neighbors.push([newRow, newCol]);
  }
  return neighbors;
};

// Do not edit the line below.
exports.riverSizes = riverSizes;
