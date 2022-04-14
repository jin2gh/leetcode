int maximumWealth(int** accounts, int accountsSize, int* accountsColSize){
  int cnt = 0, sum = 0;
  for (int i = 0; i < accountsSize; ++i) {
    for (int j = 0; j < accountsColSize[i]; ++j) {
      sum += accounts[i][j];
    }
    cnt = cnt < sum ? sum : cnt;
    sum = 0;
  }
  return cnt;
}