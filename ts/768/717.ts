function isOneBitCharacter(bits: number[]): boolean {
  const idx = bits.length - 1
  let i = 0
  while (i < idx) {
    if (bits[i] === 1) i += 1
    i += 1
  }
  return i === idx
};