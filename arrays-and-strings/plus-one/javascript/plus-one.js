/* 
Input - an array of positive integers
Output - an array of positive integers
Constraints - each "digit" must be between 0 and 9
Edge 
    - if a one's place digit is 9, plus one would be zero, and add 1 to the next place value
        i.e. [1,9] => [2,0]
    - but if there's only one digit, we need to make room and shift everything to right by one
        i.e. [9] => [1,0]
Solution 1
    - Add one to the last index value
        - If the value is less than or equal to 9, return the digits
        - Else, set the value to 0 and go to the next digit to the left and repeat steps

        Time complexity: O(n)
        Space complexity: O(n)
Level up: What if it were plus 2 or more?
*/

const plusOne = digits => {
    let index = digits.length - 1;
    let addToTheLeft = true;
    while (addToTheLeft) {
        if (index > 0) {
            digits[index] = digits[index] + 1;
            if (digits[index] > 9) {
                digits[index] -= 10;
                index--;
            } else {
                addToTheLeft = false;
            }
        } else {
            digits.unshift(1);
            addToTheLeft = false;
        }
    }

    return digits;
}

module.exports = plusOne;