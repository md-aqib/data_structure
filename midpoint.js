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

    // mid point
    midpoint() {
        let fast = this.head;
        let slow = this.head;
        if(fast && slow){
            while(fast.next && fast.next.next){
                slow = slow.next
                fast = fast.next.next
            }
            return slow;
        }
        return null
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
const midpoint = list.midpoint()
console.log(midpoint)