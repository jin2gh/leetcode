// 哈希表
function isIsomorphic(s: string, t: string): boolean {
  const sht = {}, tht = {}
  for (let i = 0, len = s.length; i < len; ++i) {
    if ((sht[s[i]] && sht[s[i]] !== t[i]) ||
      (tht[t[i]] && tht[t[i]] !== s[i])
    ) return false
    sht[s[i]] = t[i]
    tht[t[i]] = s[i]
  }
  return true
};