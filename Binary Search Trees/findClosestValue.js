const findClosestValueInBST = (tree, target) => {
  let diff = Infinity;
  let value = Infinity;
  const helper = (tree, target) => {
    if (tree === null) {
      return null;
    }
    let newDiff = Math.abs(target - tree.value);
    if (newDiff < diff) {
      diff = newDiff;
      value = tree.value;
    }
    if (target > tree.value && tree.right) {
      return helper(tree.right, target);
    } else if (target < tree.value && tree.left) {
      return helper(tree.left, target);
    } else {
      return value;
    }
  };
  return helper(tree, target);
};
