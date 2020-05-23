// likedList
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

    getFirst(){
        return this.head
    }

    getLast(){
        let node = this.head
        while(node){
            if(!node.next){
                return node
            }
            node = node.next
        }
        return null
    }

    clear(){
        this.head = null
    }

    removeFirst(){
        let node = this.head
        if(node){
            this.head = this.head.next
        }
        return;
    }

    removeLast(){
        let node = this.head
        if(!node){
            return;
        }
        while(node){
            if(!node.next){
                this.head = null
                return;
            }
            node = node.next
        }
    }

    insertLast(data){
        let node = this.head
        if(!node){
            this.head = new Node(data, this.head)
        } else {
            while(node){
                if(!node.next){
                    this.head = new Node(data, this.head)
                    return;
                }
                node = node.next
            }
        }
    }

    getAt(index){
        let node = this.head
        while(node){
            let counter = 0;
            if(counter === index){
                return node
            }
            counter++
            node = node.next
        }
        return null
    }

    removeAt(index){
        let node = this.head
        while(node){
            let counter = 0;
            if(counter === index){
                this.head = this.head.next
            }
            counter++
        }
        return;
    }

    insertAt(data, index){
        let node = this.head
        while(node){
            let counter = 0;
            if(counter === index){
                this.head = new Node(data, this.head)
            }
            counter++
        }
        this.head = new Node(data, this.head)
        return;
    }

}
const node = new Node('a', 'b');
const l = new LinkedList();
l.size()
l.getFirst()
let last = l.getFirst()
console.log(last)