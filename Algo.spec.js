describe("A binary search tree", function() {
  class BinarySearchTree {
    // BinarySearchTree constructor function
    constructor(val) {
      this.value = val;
      this.left = this.right = null;
    }

    // BinarySearchTree.prototype.insert
    insert(val) {
      const wrapper = (val, head) => {
        if (val < head.value) {
          if (!head.left) {
            const newNode = new BinarySearchTree(val);
            head.left = newNode;
          } else {
            wrapper(val, head.left);
          }
        } else if (val >= head.value) {
          if (!head.right) {
            head.right = new BinarySearchTree(val);
          } else {
            wrapper(val, head.right);
          }
        }
      };
      wrapper(val, this);
      return this;
    }
  }

  let tree;
  beforeEach(function() {
    tree = new BinarySearchTree(100);
  });

  it("is created with the correct value", function() {
    expect(tree.value).toBe(50);
    const tree2 = new BinarySearchTree("Frodo");
    expect(tree2.value).toBe("Frodo");
  });

  it("inserts values in the correct locations", function() {
    tree.insert(80).insert(20);
    expect(tree.left.value).toBe(20);
    expect(tree.right.value).toBe(80);
  });
});
