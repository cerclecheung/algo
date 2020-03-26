function boggleBoard(board, words) {
  const returnArr = [];
  words.forEach(word => {
    if (word.length === 1) {
      let checked = false;
      for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] === word[0]) {
            returnArr.push(board[i][j]);
            checked = true;
            break;
          }
        }
        if (checked) {
          break;
        }
      }
    } else {
      // length>1
      // this is for finding the first letter and get all the positions
      let letterPos = findLetterInBoard(board, word[0]);
      // given the first letter postition, looking for its neighbors that equal the second letter
      letterPos.forEach(firstPo => {
        let neighborsPo = findNeighbors(board, firstPo, word[1]);
        if (neighborsPo.length > 0) {
          let direction;
          neighborsPo.forEach(secondPo => {
            direction = [secondPo[0] - firstPo[0], secondPo[1] - firstPo[1]];
            let idx = 2;
            let rolPo = secondPo[0] + direction[0];
            let colPo = secondPo[1] + direction[1];
            while (idx < word.length && board[rolPo][colPo] === word[idx]) {
              rolPo += direction[0];
              colPo += direction[1];
              idx++;
            }
            if (idx === word.length && !returnArr.includes(word)) {
              returnArr.push(word);
            }
          });
        }
      });
    }
  });
  return returnArr;
}

const findNeighbors = (board, position, secondLetter) => {
  let arr = [];
  for (
    let i = position[0] - 1 < 0 ? 0 : position[0] - 1;
    i <= (position[0] + 1 < board.length ? position[0] + 1 : board.length);
    i++
  ) {
    for (
      let j = position[1] - 1 < 0 ? 0 : position[1] - 1;
      j <=
      (position[1] + 1 < board[0].length ? position[1] + 1 : board[0].length);
      j++
    ) {
      console.log("all", i, j);
      if (
        board[i][j] === secondLetter &&
        !(i === position[0] && j === position[1])
      ) {
        console.log("passed", i, j);
        arr.push([i, j]);
      }
    }
  }
  return arr;
};

const findLetterInBoard = (board, targetLetter) => {
  const poArr = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === targetLetter) {
        poArr.push([i, j]);
      }
    }
  }
  return poArr;
};
console.log(
  findLetterInBoard(
    [
      [1, 3, 3, 4, 5, 1, 2, 3],
      [1, 2, 3, 4, 5, 1, 2, 3],
      [1, 3, 3, 4, 5, 1, 2, 3]
    ],
    2
  )
);

console.log(
  findNeighbors(
    [
      [1, 3, 3, 4, 5, 1, 2, 3],
      [2, 3, 3, 4, 5, 1, 2, 3],
      [1, 3, 3, 4, 5, 1, 2, 3]
    ],
    [1, 0],
    3
  )
);
