/*https://leetcode.com/explore/learn/card/fun-with-arrays/526/deleting-items-from-an-array/3248/

Input: array of integers
Output: Int - length of array after removing duplicates
Constraints: Array can be empty
Edge:

Solution:
Use two pointer.
Start one pointer (j) at idx 0, and second pointer(i) at j + 0
j represents the length of the array after duplicates are removed, 
i is a comparison point
Compare the two values,
    If they are identical, increment i until it reaches a different value
    Once i reaches a new value, increment j, and replace the value at index j with the value at index i, then increment i    
*/

const removeDuplicates = nums => {
    if (nums.length <= 1) return nums.length;

    let j = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }

    return j + 1;
}

module.exports = removeDuplicates;