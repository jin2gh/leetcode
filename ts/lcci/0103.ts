function replaceSpaces(S: string, length: number): string {
  let s: string = ''
  const SPACE: string = ' ', ENCODE_SPACE = '%20'
  const min: number = Math.min(S.length, length)
  for (let i = 0; i < min; i++) {
    if (S[i] === SPACE) {
      s += ENCODE_SPACE
    } else {
      s += S[i]
    }
  }
  return s
}