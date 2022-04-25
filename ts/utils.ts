export function isLowercase(c: string): boolean {
  return c >= 'a' && c <= 'z'
}

export function isUppercase(c: string): boolean {
  return c >= 'A' && c <= 'Z'
}

export function isLetter(c: string): boolean {
  return isLowercase(c) || isUppercase(c)
}

export function isDigit(ch: string): boolean {
  return ch >= '0' && ch <= '9'
}

export function swap(nums: number[], l: number, r: number): void {
  const temp = nums[l]
  nums[l] = nums[r]
  nums[r] = temp
};