const dominantIndex = require('./largest-number-at-least-twice-of-others');

test('returns 0 when input array contains a single element', () => {
    const arr = [1];
    expect(dominantIndex(arr)).toBe(0);
});

test('returns -1', () => { 
    const arr = [1,2,3,4];
    expect(dominantIndex(arr)).toBe(-1);
});

test('returns 1', () => {
    const arr = [3,6,1,0];
    expect(dominantIndex(arr)).toBe(1);
})

test('returns 0', () => {
    const arr = [1,0];
    expect(dominantIndex(arr)).toBe(0);
})

test('returns -1', () => {
    const arr = [0,0,3,2];
    expect(dominantIndex(arr)).toBe(-1);
})