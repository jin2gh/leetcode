function maxArea(height: number[]): number {
  let area = 0, l = 0, r = height.length - 1
  while(l < r) {
    let min = Math.min(height[l], height[r])
    area = Math.max(area, min * (r - l))
    if (min === height[l]) l += 1
    else r -= 1
  }
  return area
};