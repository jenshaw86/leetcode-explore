const findPivotIndex = require('./find-pivot-index');

test('pivot index is 3', () => {
    expect(findPivotIndex([1,7,3,6,5,6])).toBe(3);
});

test('there is no pivot index', () => {
    expect(findPivotIndex([1,2,3])).toBe(-1);
});

test('pivot index is 0', () => {
    expect(findPivotIndex([2,1,-1])).toBe(0);
});

test('single element array pivot index is 0', () => {
    expect(findPivotIndex([1])).toBe(0);
});