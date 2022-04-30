const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.head = null;
  }
  
  root() {
    return this.head;
  }

  add(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.insert(this.head, newNode);
    }
  }

  insert(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insert(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insert(node.right, newNode);
      }
    }
  }

  has(data) {
    if (this.search(this.head, data)) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    return this.search(this.head, data);
  }

  search(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return node;
    }
  }

  remove(data) {
    this.head = this.removeNode(this.head, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  minNode(node) {
    if (node.left === null)
      return node;
    else
      return this.minNode(node.left);
  }

  min() {
    return this.minNode(this.head).data;
  }

  maxNode(node) {
    if (node.right === null)
      return node;
    else
      return this.maxNode(node.right);
  }

  max() {
    return this.maxNode(this.head).data;
  }
}

module.exports = {
  BinarySearchTree
};