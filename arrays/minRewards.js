function minRewards(scores) {
  let rewards = new Array(scores.length);
  let currentAward = 1;
  const helper = (lastMinIdx, startIdx, endIdx, array) => {
    let min = Math.min(...array);
    let minIdx = scores.indexOf(min);
    let leftSubArr = scores.slice(startIdx, minIdx);
    let rightSubArr = scores.slice(minIdx + 1, endIdx);
    if (lastMinIdx === null) {
      console.log("1");
      rewards[minIdx] = currentAward;
    } else {
      let left = rewards[minIdx - 1] || null;
      let right = rewards[minIdx + 1] || null;
      rewards[minIdx] = Math.max(left, right) + 1;
    }

    if (leftSubArr[0]) {
      helper(minIdx, startIdx, minIdx, leftSubArr);
    }
    if (rightSubArr[0]) {
      helper(minIdx, minIdx + 1, endIdx, rightSubArr);
    }
    return;
  };
  helper(null, 0, scores.length, scores);
  return rewards.reduce((accu, ele) => accu + ele);
}
