const swapPairs = require('./swap-nodes-in-pairs');
const ll = require('../../../linked-list/implement-linked-list/linked-list');
const createFullList = require('../../../linked-list/utils');

test('[1,2] input has [2,1] output', () => {
    const inputList = [1,2];
    const outputList = [2,1];
    
    const input = createFullList(inputList);
    const output = createFullList(outputList);

    expect(swapPairs(input)).toEqual(output);
});

test('[1,2,3,4] input has [2,1,4,3] output', () => {
    const inputList = [1,2,3,4];
    const outputList = [2,1,4,3];
    
    const input = createFullList(inputList);
    const output = createFullList(outputList);

    expect(swapPairs(input)).toEqual(output);
});

test('last node in odd numbered list does not swap', () => {

});

test('empty list input has same output', () => {
    const inputList = [];
    const outputList = [];
    
    const input = createFullList(inputList);
    const output = createFullList(outputList);

    expect(swapPairs(input)).toEqual(output);
});

test('single node list has same output', () => {
    const inputList = [1];
    const outputList = [1];
    
    const input = createFullList(inputList);
    const output = createFullList(outputList);

    expect(swapPairs(input)).toEqual(output);
});

