// https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3247/

/* 
Input: array, integer (value to remove)
Output: array
Constraints: output is array, but test checks for length
Edge Cases
*/

/* Solution
Create one pointer to compare each element of the array with the inputted integer value.

If there's no match, move on.
Else, if there is a match, set a second pointer to begin seeking ahead for another value that doesn't match
    Once the second pointer identifies that value, it will replace the value at the first pointer, then decrement the length
    Set the second pointer element to null, or the integer value
*/ 

const removeElement = (nums, val) => {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
}

module.exports = removeElement;