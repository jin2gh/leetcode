// 哈希表
function firstUniqChar(s: string): string {
  const ht = {}, len = s.length
  let idx = len
  for (let i = 0; i < len; i++) {
    if (ht[s[i]]) {
      ht[s[i]][0] += 1
    } else {
      ht[s[i]] = [1, i]
    }
  }

  Object.keys(ht).forEach(key => {
    if (ht[key][0] === 1) {
      idx = Math.min(idx, ht[key][1])
    }
  })


  return idx === len ? ' ' : s[idx]
};