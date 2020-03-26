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
      let firstLetterPos = findLetterInBoard(board, word[0]);
      let success = firstLetterPos.some(firstPo => {
        let prevArr = [`${firstPo[0]}:${firstPo[1]}`];
        return findNeighbors(board, firstPo, 1, prevArr, word);
      });
      if (success) {
        returnArr.push(word);
      }
    }
  });
  return returnArr;
}

const findNeighbors = (board, position, currentWordIdx, prevArr, word) => {
  let neighbors = [];
  let nextPrev = prevArr;
  for (
    let i = Math.max(0, position[0] - 1);
    i <= Math.min(position[0] + 1, board.length - 1);
    i++
  ) {
    for (
      let j = Math.max(0, position[1] - 1);
      j <= Math.min(position[1] + 1, board[0].length - 1);
      j++
    ) {
      if (
        board[i][j] === word[currentWordIdx] &&
        !(i === position[0] && j === position[1]) &&
        !prevArr.includes(`${i}:${j}`)
      ) {
        neighbors.push([i, j]);
      }
    }
  }
  if (neighbors.length > 0) {
    if (currentWordIdx === word.length - 1) {
      return true;
    } else {
      return neighbors.some(neighbor => {
        let currentPrev = [...prevArr, `${neighbor[0]}:${neighbor[1]}`];
        return findNeighbors(
          board,
          neighbor,
          currentWordIdx + 1,
          currentPrev,
          word
        );
      });
    }
  } else {
    return false;
  }
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

// Do not edit the line below.
exports.boggleBoard = boggleBoard;
