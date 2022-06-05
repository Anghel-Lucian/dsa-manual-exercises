class Tree {
  root = {
    left: null,
    item: null,
    right: null
  };

  constructor(rootItem) {
    this.root.item = rootItem;
  }

  insert(item, node = this.root) {
    if(item < node.item) {
      if(node.left === null) {
        node.left = {
          left: null,
          item,
          right: null
        }
      } else {
        this.insert(item, node.left);
      }
    }

    if(item > node.item) {
      if(node.right === null) {
        node.right = {
          left: null,
          item,
          right: null
        }
      } else {
        this.insert(item, node.right);
      }
    }
  }

  findMin() {
    let currentNode = this.root;
    while(currentNode.left !== null) {
      currentNode = currentNode.left
    }

    return currentNode.item;
  }

  findMax() {
    let currentNode = this.root;
    while(currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.item;
  }

  remove(item) {
    this.root = this.removeNode(this.root, item);
  }

  removeNode(current, item) {
    if(current === null) return current;

    if(item === current.item) {
      if(current.left === null && current.right === null) {
        return null;
      } else if(current.left === null) {
        return current.right;
      } else if(current.right === null) {
        return current.left;
      } else {
        let tempNode = this.kthSmallestNode(current.right);
        current.item = tempNode.item;

        current.right = this.removeNode(current.right, tempNode.item);

        return current;
      }
    } else if(item < current.item) {
      current.left = this.removeNode(current.left, item);
      return current;
    } else {
      current.right = this.removeNode(current.right, item);
      return current;
    }
  }

  kthSmallestNode(node) {
    while(node.left !== null) {
      node = node.left;
    }

    return node;
  }

  getMaxDepth(node = this.root) {
    if(node === null) {
      return 0;
    } else {
      let lDepth = this.getMaxDepth(node.left);
      let rDepth = this.getMaxDepth(node.right);

      if(lDepth > rDepth) {
        return (lDepth + 1);
      } else {
        return (rDepth + 1);
      }
    }
  }
}

const tree = new Tree(100);

tree.insert(90);

console.log(tree.getMaxDepth())

tree.insert(110);
tree.insert(95);
tree.insert(85);
tree.insert(65);
tree.insert(115);
tree.remove(85)

console.log(tree.getMaxDepth())