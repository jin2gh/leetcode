function canVisitAllRooms(rooms: number[][]): boolean {
  const n = rooms.length
  const keys = new Array(n).fill(0)
  const stack = rooms[0]
  for (let i = 0; i < stack.length; i++) {
    if (keys[stack[i]]) continue
    keys[stack[i]] += 1
    stack.push(...rooms[stack[i]])
  }
  for (let i = 1; i < n; i++) {
    if (!keys[i]) return false
  }
  return true
};