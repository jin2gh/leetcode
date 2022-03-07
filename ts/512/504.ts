function convertToBase7(num: number): string {
  let ans: string = '', signed = ''
  if (num < 0) {
    signed = '-'
    num = -num
  }
  while (num >= 7) {
    ans = `${num % 7}${ans}`
    num = Math.floor(num / 7)
  }
  return `${signed}${num}${ans}`
};