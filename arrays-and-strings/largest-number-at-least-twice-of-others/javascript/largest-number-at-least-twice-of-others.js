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
*/

const dominantIndex = () => {

}

module.exports = dominantIndex;