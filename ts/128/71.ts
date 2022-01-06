// 栈
function simplifyPath(path: string): string {
  const paths: string[] = path.split('/')
  const s: string[] = []
  for (let i = 0; i < paths.length; i++) {
    if (paths[i] === '..') {
      s.length && s.pop()
    } else if (paths[i] && paths[i] !== '.') {
      s.push(paths[i])
    }
  }
  return '/' + s.join('/')
}