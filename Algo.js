function findClosestValueInBst(tree, target) {
  // Write your code here.
  const arr = [];
  const traverse = (BStree, func) => {
    if (BStree.left) {
      traverse(BStree.left, func);
    }
    func(BStree);
    if (BStree.right) {
      traverse(BStree.right, func);
    }
  };
  traverse(tree, () => {
    arr.push(tree.value);
  });
  return Math.min(...arr.map(ele => ele - target)) + target;
}

const algoFunc = (array, sumTarget) => {
  let smallIdx = 0;
  let largetIdx = array.length - 1;

  while (smallIdx < largetIdx) {
    let sum = array[smallIdx] + array[largetIdx];
    if (sum === sumTarget) {
      return true;
    } else if (sum < sumTarget) {
      smallIdx++;
    } else if (sum > sumTarget) {
      largetIdx--;
    }
  }

  return false;
};

const testArr = [3, 6, 7, 9, 10, 71];
const testTargetSum = 18;

const sharkLyric = () => {
  const arrOfSharks = ["Baby", "Mommy", "Daddy", "Grandma", "Grandpa"];

  const doo = name => {
    return `${name} shark doo doo doo doo doo doo \n`;
  };

  const exclaim = name => {
    return `${name} shark !\n`;
  };

  const newLyrc = arrOfSharks.map(shark => {
    const lyrc = doo(shark)
      .repeat(3)
      .concat(exclaim(shark));
    return lyrc;
  });

  return newLyrc.join("\n");
};

console.log(sharkLyric());
