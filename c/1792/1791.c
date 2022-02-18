int findCenter(int** edges, int edgesSize, int* edgesColSize) {
  int v0 = edges[0][0];
  int v1 = edges[0][1];
  return edges[1][0] == v0 || edges[1][1] == v0 ? v0 : v1;
}