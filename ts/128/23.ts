import { ListNode } from '../class'
import { mergeTwoLists } from '../128/21'

// 分治
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const len = lists.length
  const merge = (lists: Array<ListNode | null>, l: number, r: number): ListNode | null => {
    if (l === r) return lists[l]
    if (l > r) return null
    const mid = l + ((r - l) >> 1)
    return mergeTwoLists(merge(lists, l, mid), merge(lists, mid + 1, r))
  }
  return merge(lists, 0, len - 1)
};