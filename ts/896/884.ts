// 哈希表
function uncommonFromSentences(s1: string, s2: string): string[] {
  const arr1 = s1.split(' '), arr2 = s2.split(' ')
  const map = {}
  for (const v of arr1) {
    if (map[v]) {
      map[v] += 1
    } else {
      map[v] = 1
    }
  }

  for (const v of arr2) {
    if (map[v]) {
      map[v] += 1
    } else {
      map[v] = 1
    }
  }

  return Object.keys(map).filter(key => map[key] === 1)
};