/* 
Input = array of characters
Output = array of characters reversed
Constraints = string must be at least a character long
Edge Cases

Simple Solution:
Use Javascript's .reverse()

Recursive Solution:
space complexity: O(n) to make n/2 swaps
time complexity: O(n) to keep recursion stack
*/

const reverseString = (s) => {
    let leftIndex = 0;
    let rightIndex = s.length - 1;
    
    return reverse(s, leftIndex, rightIndex);    
};
    
const reverse = (s, leftIndex, rightIndex) => {
    if (leftIndex >= rightIndex) {
        return s;
    }
    
    [s[leftIndex], s[rightIndex]] = [s[rightIndex], s[leftIndex]];
    leftIndex++;
    rightIndex--;
    return reverse(s, leftIndex, rightIndex);
}

module.exports = reverseString;