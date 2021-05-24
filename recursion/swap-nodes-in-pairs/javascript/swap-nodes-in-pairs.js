/* 
Input: linked list object (head node)
Output: linked list object with swapped values (head node) 
C: list can be empty 
E: list can be odd numbered
*/

//Recursive solution:
// time complexity: O(n)
// space complexity: O(n)

const swapPairs = head => {
    if (!head || !head.next) return head;

    // establish first and second in pairing
    let first = head;
    let second = first.next;

    // make the swap
    first.next = swapPairs(second.next);
    second.next = first;

    // return the new "first" node
    return second;
};

// Iterative solution:
// time complexity: O(n)
// space complexity: O(1)
/*
const swapPairs = head => {
    if (!head || !head.next) return head;
    
    // establish first and second in pairing
    let first = head;
    let second = first.next;
    let prev;

    // make first swap
    first.next = second.next;
    second.next = first;
    // reassign the start of the list
    head = second;
    
    // make the swaps
    while (first.next) {
        prev = first;
        first = first.next;
        second = first.next.next;
        
        first.next = second.next;
        second.next = first;
    }

    // return the start of the list
    return head;
};
*/
module.exports = swapPairs;