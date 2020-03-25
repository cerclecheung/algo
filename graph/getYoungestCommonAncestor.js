class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  // Write your code here.
  let currentNodeFirst = descendantOne;
  let firstBottomToTopBranch = [];
  while (currentNodeFirst !== topAncestor) {
    firstBottomToTopBranch.push(currentNodeFirst);
    currentNodeFirst = currentNodeFirst.ancestor;
  }
  firstBottomToTopBranch.push(topAncestor);
  let currentNodeSecond = descendantTwo;
  while (!firstBottomToTopBranch.includes(currentNodeSecond)) {
    currentNodeSecond = currentNodeSecond.ancestor;
  }
  return currentNodeSecond;
}
