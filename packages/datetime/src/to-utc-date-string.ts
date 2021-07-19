export function toUTCDateString(date: Date): string {
  const year = date.getUTCFullYear().toString()
  const month = (date.getUTCMonth() + 1).toString()
  const day = date.getUTCDate().toString()

  return `${year.padStart(4, '0')}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}
