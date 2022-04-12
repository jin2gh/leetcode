function maximum69Number (num: number): number {
  const s = String(num), len = s.length
  let flag = false, str = ''
  for(let i = 0; i < len; ++i) {
    if(!flag && s[i] === '6') {
      str += '9'
      flag = true
    } else str += s[i]
  }
  return Number(str)
};