/*
Input: array of integers
Output: the index (integer) of the dominant number or -1 
Constraints:
    - Can an array contain negative integers or zeroes? It contains only integers equal to or greater than 0. 
    - Can an array be empty? No. An array must contain at least one integer.
    - Are there any repeating integers? Yes, but the largest integer must be unique.
Edge cases:

Solution 1: 
    - First pass, find the largest number. 
    - Second pass, compare the largest number with each number * 2
        - If the largest number is greater than double all the other numbers, return its index
        - Else, return -1
    
    Time complexity: O(2n) or O(n)
    Space complexity: O(1)
*/

// const dominantIndex = nums => {
//     if (nums.length === 1) {
//         return 0;
//     }

//     let maxIndex = 0;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] > nums[maxIndex]) {
//             maxIndex = i;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         if (i !== maxIndex && nums[maxIndex] < nums[i] * 2) {
//             return -1;
//         }
//     }

//     return maxIndex;
// }

/* 
Can we accomplish this in a single pass?

What if had two variables, largest and a nextLargest and identified those numbers in one pass? 
Then all we'd have to do next, is compare the largest with the nextLargest * 2
*/

// Second Solution
// const dominantIndex = nums => {
//     if (nums.length === 1) {
//         return 0;
//     }

//     let [largestIndex, secondLargestIndex] = nums[0] >= nums[1] ? [0, 1] : [1, 0];
//     for (let i = 2; i < nums.length; i++){
//         if (nums[i] > nums[largestIndex]) {
//             secondLargestIndex = largestIndex;
//             largestIndex = i;
//         } else if (nums[i] > nums[secondLargestIndex]) {
//             secondLargestIndex = i;
//         }
//     }

//     return nums[largestIndex] >= nums[secondLargestIndex] * 2 ? largestIndex : -1;
//  }

 // Third Solution
/* Instead of tracking two indices, just track two of the largest numbers and the index of the largest number*/
 const dominantIndex = nums => {
    if (nums.length === 1) {
        return 0;
    }

    let highestNumber = -1; 
    let secondhighestNumber = -1;
    let index = -1;  

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > highestNumber) {
            secondhighestNumber = highestNumber;
            highestNumber = nums[i];
            index = i;
        } else if (nums[i] > secondhighestNumber) {
            secondhighestNumber = nums[i];
        }
    }

    return highestNumber >= secondhighestNumber * 2 ? index : -1;
 }

module.exports = dominantIndex;