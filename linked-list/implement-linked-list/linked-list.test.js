const ll = require('./linked-list');
let list;

beforeEach(() => {
    list = new ll.LinkedList();
});

// TEST DISPLAY
test('display returns empty list', () => {
    expect(list.display()).toEqual([]);
});

// TEST ADD TO HEAD
test('addToHead(3) returns [3]', () => {
    list.addToHead(3);
    expect(list.display()).toEqual([3]);
});

test('addToHead(1) returns [1,3]', () => {
    list.addToHead(3);
    list.addToHead(1);
    expect(list.display()).toEqual([1,3]);
});

// TEST GET VALUE AT
test('getValueAt(0) on [3] returns 3', () => {
    list.addToHead(3);
    expect(list.getValueAt(0)).toEqual(3);
});

test('getValueAt(0) on empty list returns -1', () => {
    expect(list.getValueAt(0)).toEqual(-1);
});

test('getValueAt(0) on [1,3] returns 1', () => {
    list.addToHead(3);
    list.addToHead(1);
    expect(list.getValueAt(0)).toEqual(1);
});

test('getValueAt(1) [1,3] returns 3', () => {
    list.addToHead(3);
    list.addToHead(1);
    expect(list.getValueAt(1)).toEqual(3);
});

test('getValueAt(2) [1,3] returns -1', () => {
    list.addToHead(3);
    list.addToHead(1);
    expect(list.getValueAt(2)).toEqual(-1);
});

// TEST ADD TO TAIL
test('addToTail(3) to [1], returns [1,2]', () => {
    list.addToHead(1);
    list.addToTail(3);
    expect(list.display()).toEqual([1,3]);
});

test('addToTail[3] to empty list returns [3]', () => {
    list.addToTail(3);
    expect(list.display()).toEqual([3]);
});

// TEST ADD AT INDEX
test('addAtIndex[0,1] to empty list returns empty list', () => {
    list.addAtIndex(0,1);
    expect(list.display()).toEqual([1]);
})

test('addAtIndex[1,2] to empty list returns empty list', () => {
    list.addAtIndex(1,2);
    expect(list.display()).toEqual([]);
})

test('addAtIndex[1,2] to [1,3] returns [1,2,3]', () => {
    list.addToHead(1);
    list.addToTail(3);
    list.addAtIndex(1,2);
    expect(list.display()).toEqual([1,2,3]);
})