// 蔡勒公式
function dayOfTheWeek(day: number, month: number, year: number): string {
  const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  if (month < 3) { // 蔡勒公式中的月份范围是 3-14
    month += 12
    year -= 1
  }
  let c: number = Math.floor(year / 100) // 年份前两位
  let y: number = year % 1000 % 100 // 年份后两位
  let m: number = month
  let w: number = (y + Math.floor(y / 4) + Math.floor(c / 4) - 2 * c + 2 * m + Math.floor(3 * (m + 1) / 5) + day + 1) // 可能是负数
  w = (w % 7 + 7) % 7
  return days[w]
}