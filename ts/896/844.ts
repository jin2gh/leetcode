function backspaceCompare(s: string, t: string): boolean {
  return operate(s) === operate(t)
};

function operate(str: string): string {
  const s: string[] = []
  for (const c of str) {
    if (c !== '#') s.push(c)
    else if (s) s.pop()
  }
  return s.join('')
}