const removeDuplicates = require('./remove-duplicates');

test('remove no duplicates', () => {
    const nums = [1,2,3,4,5];
    const expectedNums = [1,2,3,4,5];

    const k = removeDuplicates(nums);
    expect(k).toEqual(expectedNums.length);

    for (let i = 0; i < k; i++) {
        expect(nums[i]).toEqual(expectedNums[i]);
    }
});

test ('remove duplicates of 1', () => {
    const nums = [1,1,1];
    const expectedNums = [1];

    const k = removeDuplicates(nums);
    expect(k).toEqual(expectedNums.length);

    for (let i = 0; i < k; i++) {
        expect(nums[i]).toEqual(expectedNums[i]);
    }
});

test ('remove duplicates of 1s and 3s', () => {
    const nums = [1,1,2,3,3,3,3,4];
    const expectedNums = [1,2,3,4];

    const k = removeDuplicates(nums);
    expect(k).toEqual(expectedNums.length);

    for (let i = 0; i < k; i++) {
        expect(nums[i]).toEqual(expectedNums[i]);
    }
});

test ('empty nums', () => {
    const nums = [];
    const expectedNums = [];

    const k = removeDuplicates(nums);
    expect(k).toEqual(expectedNums.length);

    expect(nums).toEqual(expectedNums);
});