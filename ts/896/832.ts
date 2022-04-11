function flipAndInvertImage(image: number[][]): number[][] {
  const n = image.length, half = n / 2
  for(let i = 0; i < n; ++i) {
    for(let j = 0; j < half; ++j) {
      const tmp = image[i][j] ^ 1
      image[i][j] = image[i][n - 1 -j] ^ 1
      image[i][n - 1 -j] = tmp
    }
  }
  return image
};