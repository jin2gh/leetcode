// 递归
const swapPairs = function(head) {
  if (!head || !head.next) return head
  let newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
}