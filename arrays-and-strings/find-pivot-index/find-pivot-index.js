// https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1144/

/* 
Input: int []
Output: int (index/pivot location or if there's not pivot, -1)
Constraints: [].length > 0, array can contain negative and positive integers
Edge Cases: pivot can be located on the edge of an array (index 0 or length - 1).
*/

/* 
Solution
1. Sum the elements of the array.
2. Create a pointer that starts at the left-most edge, index 0. Left sum is 0, right sum is sum minus value at index 0.
3. Compare the left and right values. 
    - If they match, return the current index as pivot. 
    - If they don't match, add previous value to left count, and subtract current value from right count, then increment the pointer. 
4. If we iterate through the entire array without finding a pivot, return -1.

Time complexity = O(2n) or O(n)
Space complexity = 0(1)
*/

const findPivotIndex = nums => {
    let sum = nums.reduce((a,c) => a + c);

    let leftCount = 0;
    let rightCount = sum - nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (leftCount === rightCount) {
            return i;
        }
        if (i !== nums.length - 1) {
            leftCount += nums[i];
            rightCount -= nums[i + 1];
        } else {
            return -1;
        }
    }
}

module.exports = findPivotIndex;