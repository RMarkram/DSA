class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Adds new value at the end of the linked list
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        ++this.length;
        return this;
    }

    // Return last node of the linked list
    pop() {

        if (!this.head) return undefined;

        let current = this.head;
        let newTail = this.head;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        newTail.next = null;
        this.tail = newTail;

        --this.length;

        if (this.length === 0)
            this.head = this.tail = null;

        return current;
    }

    // Remove first node from linked list
    shift() {

        if (!this.head) return undefined;

        let current = this.head;
        this.head = current.next;

        --this.length;

        if (this.length === 0)
            this.head = this.tail = null;

        return current;
    }

    // Adds new node at the beginning of the linked list
    unshift(val) {
        let newHead = new Node(val);
        newHead.next = this.head;
        this.head = newHead;

        if (!this.tail) this.tail = this.head;

        ++this.length;

        return this;
    }

    // Retrieve node at given index
    get(index) {

        if (this.length == 0 || index >= this.length) return null;

        let count = 0;
        let current = this.head;

        while (count !== index) {
            current = current.next;
            count++;
        }

        return current;
    }

    // Set value of node at given index
    set(index, val) {

        let node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }

        return false;
    }

    // Insert new node at given index
    insert(index, val) {

        if (index >= this.length) return false;

        let newNode = new Node(val);
        let current = this.head;
        let prev = current;
        let count = 0;

        while (count < index);
        {
            prev = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        prev.next = newNode;

        ++this.length;

        return true;
    }

    // Remove node at index
    remove(index) {
        if (index >= this.length) return false;

        let deletedNode = this.get(index);
        let previousNode = this.get(index - 1);

        if (previousNode)
            previousNode.next = deletedNode.next;

        if (deletedNode === this.tail)
            this.tail = previousNode;

        if (!deletedNode.next && !previousNode) {
            this.head = this.tail = null;
            this.length = 0;
            return true;
        }

        --this.length;
        return true;

    }

    // reverse node
    reverse() {
        let reverseList = new SinglyLinkedList();
        let current = this.head;
        reverseList.unshift(current.val);

        while (current.next) {
            current = current.next;
            reverseList.unshift(current.val);
        }

        return reverseList;
    }
}

let list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("!");

// let node = list.pop();
// node = list.pop();
// node = list.pop();
// node = list.pop();

// let node = list.shift();
// node = list.shift();
// node = list.shift();

// list.unshift("Markram");
// list.unshift("Ruan");

//let node = list.get(0);

//list.set(0, "Peanuts");

//let res = list.insert(1, "Ruan");

let reverseList = list.reverse();

console.log(reverseList);



