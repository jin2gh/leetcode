// 遍历
function nextGreatestLetter(letters: string[], target: string): string {
  for (const c of letters) {
    if (c > target) return c
  }
  return letters[0]
};

// 二分查找
function nextGreatestLetter1(letters: string[], target: string): string {
  let l = 0, r = letters.length - 1, m = 0
  if (letters[r] <= target) return letters[0]
  while (l < r) {
    m = l + ((r - l) >> 1)
    if (letters[m] <= target) l = m + 1
    else r = m
  }
  return letters[r]
};