function toGoatLatin(sentence: string): string {
  let end = 'maa', word = '', initial = '', ans = ''

  for (const ch of sentence) {
    if (isSpace(ch)) {
      ans += word + initial + end + ' '
      end += 'a'
      word = ''
      initial = ''
      continue
    }
    if (word || initial) word += ch
    else {
      if (isVowel(ch)) word += ch
      else initial = ch
    }
  }

  return ans + word + initial + end
};

function isVowel(char: string): boolean {
  const ht = {
    'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1,
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1,
  }
  return ht[char] === 1
}

function isSpace(char: string): boolean {
  return char === ' '
}