// 哈希表计数
function groupAnagrams(strs: string[]): string[][] {
  const ht = {}, aNum = 'a'.charCodeAt(0)
  for (const str of strs) {
    const keys = new Array(26).fill(0)
    for (const s of str) {
      keys[s.charCodeAt(0) - aNum] += 1
    }

    const key = keys.toString()
    if (ht[key]) {
      ht[key].push(str)
    } else {
      ht[key] = [str]
    }
  }
  return Object.values(ht)
};