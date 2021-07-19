import {
  parseDuration,
} from './parse-duration'

import type {
  Duration,
} from './types'

/**
 * Creates a new date with the given duration subtracted from a given date.
 *
 * @param date - The date to subtract a duration from
 * @param duration - The duration to subtract from the given date either as an ISO 8601 string or a duration descriptor object
 * @returns A new date with the given duration subtracted from the given date
 * @public
 *
 * @example
 * ```javascript
 * import { subtractDuration } from '@bugfixes/datetime-utils'
 *
 * const output = subtractDuration(new Date(2021, 5, 14, 0, 0, 0, 0), { months: 1 })
 * // 2021-05-14T00:00:00.000Z
 * ```
 */
export function subtractDuration(date: Date, duration: Duration | string): Date {
  const normalizedDuration = typeof duration === 'string' ? parseDuration(duration) : duration
  const output = new Date(date.getTime())

  if (typeof normalizedDuration.years === 'number') {
    output.setFullYear(output.getFullYear() - normalizedDuration.years)
  }

  if (typeof normalizedDuration.months === 'number') {
    output.setMonth(output.getMonth() - normalizedDuration.months)
  }

  if (typeof normalizedDuration.weeks === 'number') {
    output.setDate(output.getDate() - (normalizedDuration.weeks * 7)) // eslint-disable-line @typescript-eslint/no-extra-parens
  }

  if (typeof normalizedDuration.days === 'number') {
    output.setDate(output.getDate() - normalizedDuration.days)
  }

  if (typeof normalizedDuration.hours === 'number') {
    output.setHours(output.getHours() - normalizedDuration.hours)
  }

  if (typeof normalizedDuration.minutes === 'number') {
    output.setMinutes(output.getMinutes() - normalizedDuration.minutes)
  }

  if (typeof normalizedDuration.seconds === 'number') {
    output.setSeconds(output.getSeconds() - normalizedDuration.seconds)
  }

  if (typeof normalizedDuration.milliseconds === 'number') {
    output.setMilliseconds(output.getMilliseconds() - normalizedDuration.milliseconds)
  }

  return output
}
