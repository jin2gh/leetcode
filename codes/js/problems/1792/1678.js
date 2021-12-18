/**
 * @param {string} command
 * @return {string}
 */
const interpret = function(command) {
  let str = '', i = 0
  while (i < command.length) {
    if (command[i] === '(') {
      if (command[i + 1] === 'a') {
        str += 'al'
        i += 3
      } else {
        str += 'o'
        i += 1
      }
    } else {
      str += command[i]
    }
    i += 1
  }
}