class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value && this.left) {
      return this.left.contains(value);
    } else if (value >= this.value && this.right) {
      return this.right.contains(value);
    } else {
      return false;
    }
  }

  remove(value) {
    //find the first node in the tree has the given value to be replaced
    const findNode = (value, tree) => {
      if (value === tree.value) {
        return tree;
      } else if (value < tree.value) {
        return findNode(value, tree.left);
      } else {
        return findNode(value, tree.right);
      }
    };
    //find mininum for a subtree
    const findMin = node => {
      if (node.left) {
        return findMin(node.left);
      } else {
        //only right tree or hit the most left
        return node;
      }
    };
    const findParent = (tree, childNode) => {
      if (tree.left === childNode || tree.right === childNode) {
        return tree;
      } else if (childNode.value >= tree.value) {
        return findParent(tree.right, childNode);
      } else {
        return findParent(tree.left, childNode);
      }
    };
    const replaceNode = findNode(value, this);

    class BST {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }

      insert(value) {
        if (value < this.value) {
          if (!this.left) {
            this.left = new BST(value);
          } else {
            this.left.insert(value);
          }
        } else {
          if (!this.right) {
            this.right = new BST(value);
          } else {
            this.right.insert(value);
          }
        }
        // Write your code here.
        // Do not edit the return statement of this method.
        return this;
      }

      contains(value) {
        if (value === this.value) {
          return true;
        } else if (value < this.value && this.left) {
          return this.left.contains(value);
        } else if (value >= this.value && this.right) {
          return this.right.contains(value);
        } else {
          return false;
        }
        // Write your code here.
      }
      //       10
      //      /  \
      //     5   15
      //    / \  / \
      //   2  5 13 22
      //  /    / \
      // 1    12 14

      remove(value) {
        console.log(this);
        const findNode = (value, tree) => {
          if (value === tree.value) {
            return tree;
          } else if (value < tree.value) {
            return findNode(value, tree.left);
          } else {
            return findNode(value, tree.right);
          }
        };
        const findMin = node => {
          if (node.left) {
            return findMin(node.left);
          } else {
            //only right tree or hit the most left
            return node;
          }
        };
        const findParent = (tree, childNode) => {
          if (tree.left === childNode || tree.right === childNode) {
            return tree;
          } else if (childNode.value >= tree.value) {
            return findParent(tree.right, childNode);
          } else {
            return findParent(tree.left, childNode);
          }
        };
        const replaceNode = findNode(value, this);
        if (replaceNode.right) {
          const successorNode = findMin(replaceNode.right);
          const successorParentNode = findParent(this, successorNode);
          console.log("replaceNode", replaceNode);
          console.log("successorNode", successorNode);
          console.log("successorParentNode", successorParentNode);

          replaceNode.value = successorNode.value;
          if (!successorNode.right) {
            successorParentNode.left = null;
          } else {
            if (successorParentNode.left === successorNode) {
              successorParentNode.left = successorNode.right;
            } else {
              successorParentNode.right = successorNode.right;
            }
          }
        } else if (replaceNode === this) {
          return this.left;
        } else {
          console.log("noright", this.left);
          let replaceParentNode = findParent(this, replaceNode);
          if (replaceNode.left) {
            replaceParentNode.left = replaceNode.left;
          } else {
            replaceParentNode.left = null;
          }
        }
        return this;
      }
    }
    //Three senarios:
    //       10
    //      /  \
    //     5   15
    //    / \  / \
    //   2  5 13 22
    //  /    / \
    // 1    12 14
    //1. If the node has the right subtree, find the min number in the right subtree and replace the current node value with min value. (remove 10)
    if (replaceNode.right) {
      const successorNode = findMin(replaceNode.right);
      const successorParentNode = findParent(this, successorNode);
      replaceNode.value = successorNode.value;
      //1-1: Found successor on the most left (12)
      // if the succesoor doesn't have child
      if (!successorNode.right) {
        successorParentNode.left = null;
      } else {
        //if the successorNode has a right child, attach it to the parent node (if 12 has a right child 12)
        if (successorParentNode.left === successorNode) {
          successorParentNode.left = successorNode.right;
        } else {
          //remove 15, 15's successor is 22, 22's parenet is 15, so shortcut 22
          successorParentNode.right = successorNode.right;
        }
      }
    } else if (replaceNode === this) {
      // the replace node has no right subtree and is at the top
      return this.left;
    } else {
      // the replace node has no right subtree so short cut itself and attach its left child to its parent (remove 2)
      let replaceParentNode = findParent(this, replaceNode);
      if (replaceNode.left) {
        replaceParentNode.left = replaceNode.left;
      } else {
        replaceParentNode.left = null;
      }
    }
    return this;
  }
}
