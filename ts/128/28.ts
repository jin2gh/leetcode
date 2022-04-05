// KMP 匹配算法
function strStr(haystack: string, needle: string): number {
  const m = haystack.length, n = needle.length
  const prefix = getPrefix(needle)

  for (let i = 0, j = 0; i < m; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = prefix[j - 1]
    }
    if (haystack[i] === needle[j]) j += 1
    if (j === n) return i - n + 1
  }
  return -1
};

function getPrefix (P: string): number[] {
  const n: number = P.length
  const prefix: number[] = new Array(n).fill(0)
  for (let i = 1; i < n; i++) {
    let j = prefix[i - 1]
    while (j && P[i] !== P[j]) {
      j = prefix[j - 1]
    }
    if (P[i] === P[j]) j += 1
    prefix[i] = j
  }
  return prefix
}
