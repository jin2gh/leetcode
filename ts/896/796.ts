function rotateString(s: string, goal: string): boolean {
  const m = s.length, n = goal.length
  if (m !== n) return false
  const str = goal + goal
  return str.includes(s)
};