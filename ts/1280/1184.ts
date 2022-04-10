function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  if (start > destination) return distanceBetweenBusStops(distance, destination, start)
  const len = distance.length
  let sum = 0, std = 0
  for (let i = 0; i < len; ++i) {
    sum += distance[i]
    if (start <= i && i < destination)  std += distance[i]
  }
  return Math.min(sum - std, std)
};