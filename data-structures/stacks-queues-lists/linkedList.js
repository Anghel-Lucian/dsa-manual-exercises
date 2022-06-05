// implement one
class LinkedList {
  nodes = [];
  head = [this.nodes[0]];

  searchList(item, node = this.head) {
    if(node.item === item) {
      return node;
    } else {
      this.searchList(item, node.next);
    }
  }

  insertList(item) {
    const tmp = this.head;

    this.nodes = [
      {
        item,
        next: tmp
      },
      ...this.nodes,
    ]

    this.head = this.nodes[0];
  }
}

const linkedList = new LinkedList();

linkedList.insertList("Anghel");
linkedList.insertList("Paul");
linkedList.insertList("Lucian");

console.log(linkedList.searchList("Paul"));