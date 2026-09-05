/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (!head) return false;

  let current = head;
  let next = head;

  while (next && next.next) {
    current = current.next;
    next = next.next.next;

    if (current === next) {
      return true;
    }
  }

  return false;
};
