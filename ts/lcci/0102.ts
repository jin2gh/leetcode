import { numberHT } from '../interfaces'

function CheckPermutation(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false
  const ht: numberHT = {}
  const len: number = s1.length
  for (let i = 0; i < len; i++) {
    if (ht[s1[i]]) {
      ht[s1[i]] += 1
    } else {
      ht[s1[i]] = 1
    }
    if (ht[s2[i]]) {
      ht[s2[i]] -= 1
    } else {
      ht[s2[i]] = -1
    }
  }
  for (let key in ht) {
    if (ht[key] !== 0) {
      return false
    }
  }
  return true
};