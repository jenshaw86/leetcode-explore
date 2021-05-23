var LinkedList = function() {
    this.head = null;
}

var Node = function(val=null) {
    this.val = val;
    this.next = null;
}

LinkedList.prototype.display = function() {
    let displayList = [];
    let curr = this.head;
    
    while(curr) {
        displayList.push(curr.val);
        curr = curr.next;
    }

    return displayList;
}

LinkedList.prototype.getValueAt = function(index) {
    if (index < 0) throw new RangeError("Index argument must be at least 0");
    if (!this.head) return -1;

    let curr = this.head;
    for (let i = 0; i <= index; i++) {
        if (!curr) return -1;
        if (i === index) return curr.val;
        
        curr = curr.next;
    }
}
LinkedList.prototype.addToHead = function(val) {
    let node = new Node(val);

    node.next = this.head;
    this.head = node;
}

LinkedList.prototype.addToTail = function(val) {
    if (!this.head) {
        this.addToHead(val);
        return;
    }

    let node = new Node(val);
    let curr = this.head;
    while(curr) {
        if (!curr.next) {
            curr.next = node;
            return;
        }

        curr = curr.next;
    }
}

LinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0) throw new RangeError("Index argument must be at least 0");
    if (index === 0) {
        this.addToHead(val);
        return;
    }
    if (this.head === null) return;

    let node = new Node(val);
    let prev = this.head;
    let curr = prev.next;
    for (let i = 1; i <= index; i++) {
        if (!prev) return;
        if (prev && i === index) {
            node.next = curr;
            prev.next = node;
            return;
        } 

        prev = curr;
        curr = curr.next;
    }
}

LinkedList.prototype.removeAtIndex = function(index) {
    if (index < 0) throw new RangeError("Index argument must be at least 0");
    if (this.head === null) return;
    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let prev = this.head;
    let curr = prev.next;
    for (let i = 1; i <= index; i++) {
        if (!curr) return;
        if (i === index) {
            prev.next = curr.next; 
            return;
        } 
        
        prev = curr;
        curr = curr.next;
    }
}

module.exports = {
    LinkedList: LinkedList,
    Node: Node
}