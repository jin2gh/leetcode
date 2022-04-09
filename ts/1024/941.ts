function validMountainArray(arr: number[]): boolean {
  const len = arr.length
  if (len < 3) return false
  let up = false, down = false
  for (let i = 1; i < len; ++i) {
    if (arr[i] === arr[i - 1]) return false
    if (arr[i] > arr[i - 1]) {
      if (down) return false
      if (!up) up = true
    } else {
      if (!up) return false
      if (!down) down = true
    }
  }

  return up && down
};