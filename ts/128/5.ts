// 动态规划
function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2) return s
  let start = 0, maxLen = 1
  const dp: (0 | 1)[][] = new Array(len).fill(0).map(() => new Array(len).fill(0))
  for (let i = 0; i < len; i++) {
    dp[i][i] = 1
  }
  for (let l = 2; l <= len; l++) {
    for (let i = 0; i < len; i++) {
      const j = i + l - 1
      if (j >= len) break
      if (s[i] !== s[j]) {
        dp[i][j] = 0
      } else {
        if (j - i < 3) {
          dp[i][j] = 1
        } else {
          dp[i][j] = dp[i + 1][j - 1]
        }
      }

      if (dp[i][j] && l > maxLen) {
        start = i
        maxLen = l
      }
    }
  }

  return s.substring(start, start + maxLen)
};