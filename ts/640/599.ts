function findRestaurant(list1: string[], list2: string[]): string[] {
  let ans: string[] = []
  const ht = {}, l1 = list1.length, l2 = list2.length
  let sum = +Infinity
  for (let i = 0; i < l1; i++) {
    ht[list1[i]] = i
  }
  for (let i = 0; i < l2; i++) {
    if (ht[list2[i]] >= 0) {
      const idxSum = ht[list2[i]] + i
      if (idxSum < sum) {
        ans = [list2[i]]
        sum = idxSum
      } else if (idxSum === sum) {
        ans.push(list2[i])
      }
    }
  }

  return ans
};