const dateTimeWithOffsetRegEx = /^(19|20)[0-9][0-9]-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9](\.\d{3})?(Z|([-+](0[0-9]|1[0-4]):(00|30|45)))$/ // While not precise enough with possible timezone offsets it does a good enough job for what it is intended
const dateTimeWithoutOffsetRegEx = /^(19|20)[0-9][0-9]-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))(?:T([01][0-9]|2[0-3]):[0-5][0-9](?::([0-5][0-9]))?(?:\.(\d{3}))?)?$/

/**
 * Correctly parses an ISO 8601 date and time string based on how the Bud APIs handle different date formats.
 *
 * @remarks Dates without a timezone offset will be treated as UTC
 * @param datetime - A date or date and time string to be parsed
 * @returns A date object
 * @public
 *
 * @example
 * ```javascript
 * import { parseDate } from '@bugfixes/datetime-utils'
 *
 * const date = parseDate('2011-10-05T14:48:00.000Z')
 * ```
 */
export function parseDate(datetime: string): Date {
  // Handle fully formed dates with a timezone offset
  if (dateTimeWithOffsetRegEx.test(datetime)) {
    return new Date(datetime)

    // Handle dates without a timezone offset, assume the date is UTC
  } else if (dateTimeWithoutOffsetRegEx.test(datetime)) {
    const [
      year,
      month,
      day,
      hours = '0',
      minutes = '0',
      seconds = '0',
      milliseconds = '0',
    ] = datetime.split(/[-T:.]/g)

    return new Date(
      Date.UTC(
        parseInt(year, 10),
        parseInt(month, 10) - 1,
        parseInt(day, 10),
        parseInt(hours, 10),
        parseInt(minutes, 10),
        parseInt(seconds, 10),
        parseInt(milliseconds, 10),
      ),
    )
  }

  throw new Error('Unsupported date format')
}
