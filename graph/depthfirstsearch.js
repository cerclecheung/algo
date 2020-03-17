class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    const wrapper = node => {
      array.push(node.name);
      if (node.children[0]) {
        node.children.forEach(ele => wrapper(ele));
      } else {
        return;
      }
    };
    wrapper(this);
    return array;
  }
}
