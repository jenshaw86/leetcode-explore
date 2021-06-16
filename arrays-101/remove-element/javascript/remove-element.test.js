const removeElement = require('./remove-element');

test('no elements are removed', () => {
    const nums = [1,2,3,4];
    const int = 0;
    const expectedNums = [1,2,3,4];

    const k = removeElement(nums, int);

    expect(k).toEqual(expectedNums.length);

    const returnedNums = nums.slice(0, k).sort();
    for (let i = 0; i < expectedNums.length; i++) {
        expect(returnedNums[i]).toEqual(expectedNums[i]);
    }
});

test('remove 3', () => {
    const nums = [3,2,2,3];
    const int = 3;
    const expectedNums = [2,2];

    const k = removeElement(nums, int);
    
    expect(k).toEqual(expectedNums.length);

    const returnedNums = nums.slice(0, k).sort();
    for (let i = 0; i < expectedNums.length; i++) {
        expect(returnedNums[i]).toEqual(expectedNums[i]);
    }
});

test('remove 2', () => {
    const nums = [0,1,2,2,3,0,4,2];
    const int = 2;
    const expectedNums = [0,0,1,3,4];

    const k = removeElement(nums, int);
    
    expect(k).toEqual(expectedNums.length);

    const returnedNums = nums.slice(0, k).sort();

    for (let i = 0; i < expectedNums.length; i++) {
        expect(returnedNums[i]).toEqual(expectedNums[i]);
    }
});

test('remove all', () => {
    const nums = [3,3];
    const int = 3;
    const expectedNums = [];

    const k = removeElement(nums, int);
    
    expect(k).toEqual(expectedNums.length);

    const returnedNums = nums.slice(0, k).sort();

    for (let i = 0; i < expectedNums.length; i++) {
        expect(returnedNums[i]).toEqual(expectedNums[i]);
    }
});