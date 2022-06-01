/* Give an algorithm to reverse the direction of a given singly linked list. In
other words, after the reversal all pointers should now point backwards. Your
algorithm should take linear time. */

const nodeC = {
  item: "Lucian",
  next: null
}

const nodeB = {
  item: "Paul",
  next: nodeC
}

const nodeA = {
  item: "Anghel",
  next: nodeB
};

let head = nodeA;

function reverseList(head) {
  let prev = null;
  let next = null;
  let current = head;

  while(current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
};

reverseList(head);