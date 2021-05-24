/* 
Input: linked list / head
Output: linked list (reversed) / head
Constraints: Nodes can be of any value
Edge Cases: list can be empty or hold a single node
*/

/* Recursive solution 

*/
// const reverseList = head => {
    
// }

/* Iterative solution
Time: O(n)
Space: O(1)
*/

const reverseList = head => {
    if (!head || !head.next) return head;

    let prev = head; 
    let curr = prev.next;
    let next = curr.next;

    prev.next = null;
    curr.next = prev;

    while(next) {    
        prev = curr;
        curr = next;
        next = next.next;

        curr.next = prev;
    }

    return curr;

}

module.exports = reverseList;