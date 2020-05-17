// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    size() {
      let counter = 0;
      let node = this.head;
  
      while (node) {
        counter++;
        node = node.next;
      }
  
      return counter;
    }

    
}
const node = new Node('a', 'b');
console.log(node)
const l = new LinkedList();
console.log(l)
l.insertFirst(1)
l.size()
console.log(l)