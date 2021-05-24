/* 
Input: linked list / head
Output: linked list (reversed) / head
Constraints: Nodes can be of any value
Edge Cases: list can be empty or hold a single node
*/

/* Recursive solution 
Time: 0(n)
Space: 0(n)
*/
const reverseList = (head, prev=null) => {
// base case: when there is no next node, in other words, curr is the last valid node in the list
// recurrence relation: prev, curr, next, each shifted to the next node
    if (!head) return head;
    
    let next = head.next;
    head.next = prev;
    
    // if there's no next node, return the current head.
    // otherwise, call reverse the remainder of the list
    return next ? reverseList(next, head) : head;
}

/* Iterative solution
Time: O(n)
Space: O(1)
*/

// const reverseList = head => {
//     if (!head || !head.next) return head;

//     let prev = head; 
//     let curr = prev.next;
//     let next = curr.next;

//     prev.next = null;
//     curr.next = prev;

//     while(next) {    
//         prev = curr;
//         curr = next;
//         next = next.next;

//         curr.next = prev;
//     }

//     return curr;

// }

module.exports = reverseList;