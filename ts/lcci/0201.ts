// 哈希表
function removeDuplicateNodes(head: ListNode | null): ListNode | null {
  if (!head) return head
  const map = new Map<number, boolean>()
  let prev = head
  let cur = head.next
  map.set(prev.val, true)
  while (cur) {
    if (map.has(cur.val)) {
      prev.next = cur.next
    } else {
      map.set(cur.val, true)
      prev = prev.next
    }
    cur = cur.next
  }
  return head
};