import { numsHT } from '../interfaces'

// 哈希表
function firstUniqChar(s: string): number {
  const ht: numsHT = {}
  let idx = -1
  for (let i = 0; i < s.length; i++) {
    if (ht[s[i]]) {
      ht[s[i]][0] += 1
    } else {
      ht[s[i]] = [1, i]
    }
  }

  Object.values(ht).forEach(val => {
    if (val[0] === 1) {
      if (idx === -1) {
        idx = val[1]
      } else {
        idx = Math.min(idx, val[1])
      }
    }
  })
  return idx
};