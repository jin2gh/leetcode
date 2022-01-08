function game(guess: number[], answer: number[]): number {
  let count: number = 0
  for (let i = 0; i < 3; i++) {
    if (guess[i] === answer[i]) {
      count += 1
    }
  }
  return count
}