// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.

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

    insertLast(data){
        let node = this.head
        if(!node){
            this.head = new Node(data)
            return;
        }
        while(node){
            if(!node.next){
                node.next = new Node(data)
                return;
            }
            node = node.next
        }            
    }

    // from last
    fromLast(n) {
        let fast = this.head;
        let slow = this.head;

        while(n > 0){
            fast = fast.next
            n--
        }
        while(fast.next){
            slow = slow.next
            fast = fast.next
        }

        return slow;
    }
}

const node = new Node('a', 'b')
const list = new LinkedList()
list.insertLast(1)
list.insertLast(2)
list.insertLast(3)
list.insertLast(4)
list.insertLast(5)
list.insertLast(6)
list.insertLast(7)
const fromLast = list.fromLast(3)
console.log(fromLast)