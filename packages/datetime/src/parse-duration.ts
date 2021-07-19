import type {
  Duration,
} from './types'

const durationRegEx = /^P(?:(?<years>\d+)Y)?(?:(?<months>\d+)M)?(?:(?<weeks>\d+)W)?(?:(?<days>\d+)D)?(T(?:(?<hours>\d+)H)?(?:(?<minutes>\d+)M)?(?:(?<seconds>\d+)S)?)?$/

/**
 * Parses an ISO 8601 duration string into the duration of its individual duration units.
 *
 * @param duration - An ISO 8601 duration string to parse
 * @returns The duration for each individual time unit
 * @public
 *
 * @example
 * ```javascript
 * import { parseDuration } from '@bugfixes/datetime-utils'
 *
 * const duration = parseDuration('P23DT3H')
 * // { days: 23, hours: 3 }
 * ```
 */
export function parseDuration(duration: string): Duration {
  if (!durationRegEx.test(duration)) {
    throw new Error('Invalid ISO 8601 duration string')
  }

  const matches = (durationRegEx.exec(duration) as RegExpExecArray).groups as {[name: string]: string | undefined }
  const output: Duration = {}

  Object.keys(matches).forEach(function (key) {
    const value = matches[key]

    if (typeof value === 'string') {
      output[key as keyof Duration] = parseInt(value, 10)
    }
  })

  return output
}
