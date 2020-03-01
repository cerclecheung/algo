function validateBst(tree) {
  // Write your code here.
  const array = [];
  const helper = tree => {
    if (tree.left) {
      console.log("left");
      // if (tree.left.value<tree.value){
      helper(tree.left);
      // }else{
      // result = false
      // }
    }
    array.push(tree.value);
    console.log(array);
    if (tree.right) {
      console.log("right");
      // if(tree.right.value>=tree.value){
      helper(tree.right);
      // }else{
      // 	 result = false
      // }
    }
    console.log(tree.value);
    // return result
  };
  helper(tree);

  return !!array.reduce((accu, current, index, arr) => {
    if (accu !== false && current - accu >= 0) {
      return current;
    } else {
      return false;
    }
  });
}
