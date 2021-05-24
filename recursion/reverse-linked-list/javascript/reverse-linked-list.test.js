const createFullList = require("../../../linked-list/utils");
const reverseList = require("./reverse-linked-list");

test('[1,2,3,4,5] reversed returns output [5,4,3,2,1]', () => {
    const inputList = [1,2,3,4,5];
    const outputList = [5,4,3,2,1];

    const input = createFullList(inputList);
    const output = createFullList(outputList);

    expect(reverseList(input)).toEqual(output);
});

test('[1,2] reversed returns output [2,1]', () => {
    const inputList = [1,2];
    const outputList = [2,1];

    const input = createFullList(inputList);
    const output = createFullList(outputList);

    expect(reverseList(input)).toEqual(output);
});

test('[] reversed returns output []', () => {
    const inputList = [];
    const outputList = [];

    const input = createFullList(inputList);
    const output = createFullList(outputList);

    expect(reverseList(input)).toEqual(output);
});