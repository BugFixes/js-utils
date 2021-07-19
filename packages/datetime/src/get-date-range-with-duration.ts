import {
  addDuration,
} from './add-duration'
import {
  subtractDuration,
} from './subtract-duration'

import type {
  Duration,
} from './types'

type DateRange = {
  from: Date,
  to: Date,
}

type InputDate = {
  from: Date,
} | {
  to: Date,
}

/**
 * Get a date range with a specified `from` or `to` date and the given duration.
 *
 * @param pivotDate - An object containing a `from` or a `to` date to act as a starting or end point of the range
 * @param duration - The duration of the date range, which will be subtracted or added to `pivotDate` depending on the required direction
 * @returns An object containing `from` and `to` dates
 * @public
 *
 * @example
 * ```javascript
 * import { getDateRangeWithDuration } from '@bugfixes/datetime-utils'
 *
 * const output = getDateRangeWithDuration({ from: new Date(2021, 5, 14, 0, 0, 0, 0) }, { months: 1 })
 * // { from: 2021-06-14T00:00:00.000Z, to: 2021-07-14T00:00:00.000Z }
 * ```
 */
export function getDateRangeWithDuration(pivotDate: InputDate, duration: Duration | string): DateRange {
  // @ts-expect-error Depending on the target direction either one or the other will be provided
  const { from, to } = pivotDate

  if (typeof from !== 'undefined') {
    return {
      from: from,
      to: addDuration(from, duration),
    }
  } else if (typeof to !== 'undefined') {
    return {
      from: subtractDuration(to, duration),
      to: to,
    }
  }

  throw new Error('A from or to pivot date must be provided')
}
