// 滑动窗口
function checkInclusion(s1: string, s2: string): boolean {
  const m = s1.length, n = s2.length
  if (m > n) return false
  const CHARS = 26
  const cnt1 = new Array(CHARS).fill(0),
        cnt2 = new Array(CHARS).fill(0),
        unc_a = 'a'.charCodeAt(0)
  for (let i = 0; i < m; i++) {
    cnt1[s1[i].charCodeAt(0) - unc_a] += 1
    cnt2[s2[i].charCodeAt(0) - unc_a] += 1
  }

  if (cnt1.toString() === cnt2.toString()) return true

  for (let i = m; i < n; ++i) {
    cnt2[s2[i].charCodeAt(0) - unc_a] += 1
    cnt2[s2[i - m].charCodeAt(0) - unc_a] -= 1
    if (cnt1.toString() === cnt2.toString()) return true
  }

  return false
};

// 滑动窗口优化
function checkInclusion1(s1: string, s2: string): boolean {
  const m = s1.length, n = s2.length
  if (m > n) return false
  const cnt = new Array(26).fill(0),
        unc_a = 'a'.charCodeAt(0)
  for (let i = 0; i < m; i++) {
    cnt[s1[i].charCodeAt(0) - unc_a] -= 1
    cnt[s2[i].charCodeAt(0) - unc_a] += 1
  }

  let diff = 0
  for (const c of cnt) {
    if (c !== 0) diff += 1
  }

  if (diff === 0) return true

  for (let i = m; i < n; ++i) {
    const x = s2[i].charCodeAt(0) - unc_a, y = s2[i - m].charCodeAt(0) - unc_a
    if (x === y) continue

    if (cnt[x] === 0) diff += 1
    cnt[x] += 1
    if (cnt[x] === 0) diff -= 1

    if (cnt[y] === 0) diff += 1
    cnt[y] -= 1
    if (cnt[y] === 0) diff -= 1

    if (diff === 0) return true
  }

  return false
};