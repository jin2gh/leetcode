function angleClock(hour: number, minutes: number): number {
  const unit = 6, max = 60
  hour = hour === 12 ? 0 : hour
  const cwh = hour * 5 + minutes / 12
  let angle = cwh > minutes ? cwh - minutes : minutes - cwh
  if (max / 2 < angle) {
    angle = max - angle
  }
  return angle * unit
};