function complexNumberMultiply(num1: string, num2: string): string {
  const arr1 = parseNum(num1), a1 = arr1[0], b1 = arr1[1]
  const arr2 = parseNum(num2), a2 = arr2[0], b2 = arr2[1]
  return `${a1 * a2 - b1 * b2}+${a1 * b2 + a2 * b1}i`
};

function parseNum(str: string): [number, number] {
  const strs = str.split('+')
  let m1 = strs[1].length - 1, s1 = ''
  for (let i = 0; i < m1; i++) s1 += strs[1][i]
  return [+strs[0], +s1]
}