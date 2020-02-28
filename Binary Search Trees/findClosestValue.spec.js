describe("find closest value in BST", () => {
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
  }
  const test = new BST(100)
    .insert(5)
    .insert(15)
    .insert(5)
    .insert(2)
    .insert(1)
    .insert(22)
    .insert(1)
    .insert(1)
    .insert(3)
    .insert(1)
    .insert(1)
    .insert(502)
    .insert(55000)
    .insert(204);

  it("Test Case #1", function() {
    const output = findClosestValueInBST(test, 208);
    expect(output).toEqual(204);
  });
});
