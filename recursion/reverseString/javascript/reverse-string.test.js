const reverseString = require('./reverse-string');

test('returns ["c", "b", "a"]', () => {
    const s = ["a","b","c"];
    const reversedS = ["c", "b", "a"];
    expect(reverseString(s)).toEqual(reversedS);
});

test('returns ["o","l","l","e","H"]', () => {
    const s = ["H","e","l","l","o"];
    const reversedS = ["o","l","l","e","H"];
    expect(reverseString(s)).toEqual(reversedS);
});

test('returns ["h","a","n","n","a","H"]', () => {
    const s = ["H","a","n","n","a","h"];
    const reversedS = ["h","a","n","n","a","H"];
    expect(reverseString(s)).toEqual(reversedS);
});