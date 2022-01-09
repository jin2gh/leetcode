function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let t: number = releaseTimes[0], s: string = keysPressed[0]
  for (let i = 1; i < releaseTimes.length; i++) {
    let ct: number = releaseTimes[i] - releaseTimes[i - 1]
    let cs: string = keysPressed[i]
    if (ct > t || (ct === t && s < cs)) {
      s = cs
      t = ct
    }
  }
  return s
}