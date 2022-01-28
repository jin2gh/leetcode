function numberOfWeakCharacters(properties: number[][]): number {
  properties.sort((a, b) => {
    return a[0] === b[0] ? (a[1] - b[1]) : (b[0] - a[0])
  })
  let count = 0, maxDef = 0
  for (const v of properties) {
    if (v[1] < maxDef) {
      count += 1
    } else {
      maxDef = v[1]
    }
  }
  return count
};