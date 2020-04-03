function minNumberOfCoinsForChange(n, denoms) {
  let sortDenoms = denoms.sort((a, b) => b - a);
  let memo = {};
  const helper = (dif, sd) => {
    if (memo[dif]) {
      return memo[dif];
    }
    if (dif === 0) {
      return 0;
    }
    if (dif < 0) {
      return Infinity;
    }
    if (sd.includes(dif)) {
      return 1;
    } else {
      let min = Infinity;
      sd.forEach(ele => {
        min = Math.min(helper(dif - ele, sd), min);
      });
      memo[dif] = min + 1;
      return min + 1;
    }
  };
  let returnVal = helper(n, sortDenoms);
  return returnVal === Infinity ? -1 : returnVal;
}

// Do not edit the line below.
exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;
