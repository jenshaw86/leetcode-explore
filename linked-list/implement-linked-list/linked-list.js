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
    if (this.head === null) {
        return -1;
    }

    let curr = this.head;
    for (let i = 0; i <= index; i++) {
        if (curr === null) {
            return -1;
        } else if (i !== index) {
            curr = curr.next;
        } else {
            return curr.val;
        }
    }
}
LinkedList.prototype.addToHead = function(val) {
    let node = new Node(val);

    node.next = this.head;
    this.head = node;
}

LinkedList.prototype.addToTail = function(val) {
    if (this.head === null) {
        this.addToHead(val);
        return;
    }

    let node = new Node(val);
    let curr = this.head;
    while(curr) {
        if (curr.next === null) {
            curr.next = node;
            return;
        } else {
            curr = curr.next;
        }
    }
}

LinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addToHead(val);
        return;
    }
    if (this.head === null) {
        return;
    }
    let node = new Node(val);
    let prev = this.head;
    let curr = prev.next;
    for (let i = 1; i <= index; i++) {
        if (prev === null) {
            return;
        }
        if (prev && i === index) {
            node.next = curr;
            prev.next = node;
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