function interpret(command: string): string {
  const len = command.length
  let str = '', i = 0
  while (i < len) {
    if (command[i] === '(') {
      if (command[i + 1] === 'a') {
        str += 'al'
        i += 3
      } else {
        str += 'o'
        i += 1
      }
    }
    else str += command[i]
    i += 1
  }
  return str
};