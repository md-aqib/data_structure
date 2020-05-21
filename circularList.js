// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

class Node {
    constructor(data, next = null){
        this.data = data,
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null
    }

    // circular list
    circularList() {
        let fast = this.head;
        let slow = this.head;

        while(fast.next && fast.next.next){
            slow = slow.next
            fast = fast.next.next

            if(slow === fast){
                return true;
            }
        }

        return false;
    }
}

const l = new LinkedList();
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');

l.head = a;
a.next = b;
b.next = c;
c.next = b;
const circularList = l.circularList()
console.log(circularList)