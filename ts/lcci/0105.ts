function oneEditAway(first: string, second: string): boolean {
  let s1, s2, l1 = first.length, l2 = second.length
  if (l1 >= l2) {
    s1 = first
    s2 = second
  } else {
    s1 = second
    s2 = first
    l1 = s1.length
    l2 = s2.length
  }
  if (l1 - l2 > 1) return false
  let diff = 0, i = 0, j = 0
  while (i < l1 && j < l2 && diff < 2) {
    if (s1[i] !== s2[j]) {
      diff += 1
      if (l1 > l2) {
        i += 1
        continue
      }
    }
    i += 1
    j += 1
  }
  return diff < 2
};