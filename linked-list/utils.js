const { LinkedList } = require("./implement-linked-list/linked-list");

const createFullList = valuesArray => {
    const linkedList = new LinkedList();
    valuesArray.forEach(value => {
        linkedList.addToTail(value);
    });
    return linkedList.head;
}

module.exports = createFullList;