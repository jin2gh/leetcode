int game(int* guess, int guessSize, int* answer, int answerSize){
  int count = 0;
  for (int i = 0; i < 3; i++) {
    if (guess[i] == answer[i]) {
      count += 1;
    }
  }
  return count;
}