const plusOne = require('./plus-one');

test('[1,2,3,4] plus one is [1,2,3,5]', () => {
    const digits = [1,2,3,4];
    expect(plusOne(digits)).toEqual([1,2,3,5]);
});

test('[0] plus one is [1]', () => {
    const digits = [0];
    expect(plusOne(digits)).toEqual([1]);
});

test('[1,0] plus one is [1,1]', () => {
    const digits = [1,0];
    expect(plusOne(digits)).toEqual([1,1]);
});

test('[9] plus one is [1,0]', () => {
    const digits = [1,0];
    expect(plusOne(digits)).toEqual([1,1]);
});