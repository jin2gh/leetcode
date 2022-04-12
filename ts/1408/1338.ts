import { numberHT } from '../interface'

function minSetSize(arr: number[]): number {
  const len = arr.length, ht: numberHT = {}
  let cnt = 0, sum = 0
  for (const v of arr) {
    if (ht[v]) ht[v] += 1
    else ht[v] = 1
  }
  const nums = Object.values(ht).sort((a, b) => b - a)
  for (const v of nums) {
    sum += v
    cnt += 1
    if (sum * 2 >= len) break
  }
  return cnt
};