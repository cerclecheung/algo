// function validateBst(tree) {
//   // Write your code here.
//   const array = [];
//   const helper = tree => {
//     if (tree.left) {
//       console.log("left");
//       // if (tree.left.value<tree.value){
//       helper(tree.left);
//       // }else{
//       // result = false
//       // }
//     }
//     array.push(tree.value);
//     console.log(array);
//     if (tree.right) {
//       console.log("right");
//       // if(tree.right.value>=tree.value){
//       helper(tree.right);
//       // }else{
//       // 	 result = false
//       // }
//     }
//     console.log(tree.value);
//     // return result
//   };
//   helper(tree);

//   return !!array.reduce((accu, current, index, arr) => {
//     if (accu !== false && current - accu >= 0) {
//       return current;
//     } else {
//       return false;
//     }
//   });
// }

// // This is an input class. Do not edit.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

function validateBst(tree) {
  // Write your code here.
  const helper = tree => {
    let max;
    let min;
    let status = true;
    if (tree.left) {
      let left = helper(tree.left);
      if (left.max < tree.value) {
        min = Math.min(left.min, tree.value);
        status = helper(tree.left).status && status;
      } else {
        status = false;
      }
    } else {
      min = tree.value;
      max = tree.value;
    }
    if (tree.right) {
      let right = helper(tree.right);
      if (right.min >= tree.value) {
        max = Math.max(right.max, tree.value);
        status = right.status && status;
      } else {
        status = false;
      }
    } else {
      max = tree.value;
      min = tree.value;
    }
    return { status, max, min };
  };
  return helper(tree).status;
}

// Do not edit the line below.
exports.BST = BST;
exports.validateBst = validateBst;
