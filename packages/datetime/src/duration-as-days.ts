import {
  parseDuration,
} from './parse-duration'

import type {
  Duration,
} from './types'

/**
 * Converts an ISO 8601 duration string or a duration descriptor object to its equivalent in days.
 *
 * @param duration - The duration to convert either as an ISO 8601 string or a duration descriptor object
 * @returns The duration as a number of days
 * @public
 *
 * @example
 * ```javascript
 * import { durationAsDays } from '@bugfixes/datetime-utils'
 *
 * const output = durationAsDays('P3M')
 * // 90
 * ```
 */
export function durationAsDays(duration: Duration | string): number {
  const normalizedDuration = typeof duration === 'string' ? parseDuration(duration) : duration
  let output = 0

  if (typeof normalizedDuration.years === 'number') {
    output += normalizedDuration.years * 365
  }

  if (typeof normalizedDuration.months === 'number') {
    output += normalizedDuration.months * 30
  }

  if (typeof normalizedDuration.weeks === 'number') {
    output += normalizedDuration.weeks * 7
  }

  if (typeof normalizedDuration.days === 'number') {
    output += normalizedDuration.days
  }

  if (typeof normalizedDuration.hours === 'number') {
    output += normalizedDuration.hours / 24
  }

  if (typeof normalizedDuration.minutes === 'number') {
    output += normalizedDuration.minutes / 1440
  }

  if (typeof normalizedDuration.seconds === 'number') {
    output += normalizedDuration.seconds / 86400
  }

  if (typeof normalizedDuration.milliseconds === 'number') {
    output += normalizedDuration.milliseconds / 86400000
  }

  return output
}
