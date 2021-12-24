var reversePrint = function(head, arr=[]) {
  if(head) {
    if(head.next) {
      arr.unshift(head.val)
      return reversePrint(head.next, arr)
    }
    arr.unshift(head.val)
  }
  return arr
}