function uniqueMorseRepresentations(words: string[]): number {
  const map = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  const uca = 'a'.charCodeAt(0)
  const set = new Set()
  for (const str of words) {
    let morse = ''
    for (const c of str) {
      morse += map[c.charCodeAt(0) - uca]
    }
    set.add(morse)
  }
  return set.size
};