// 寻找公共节点
function findCenter(edges: number[][]): number {
  let v0 = edges[0][0], v1 = edges[0][1]
  if (edges[1][0] === v0 || edges[1][1] === v0) return v0
  return v1
};