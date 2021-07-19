import {
  splitIntoChunks,
} from './split-into-chunks'

const nonDigitsRegEx = /[^0-9]/g

/**
 * Formats a sort code into a standard format.
 *
 * @param str - A sort code to format
 * @returns A sort code in a standard format
 * @public
 *
 * @example
 * ```javascript
 * import { formatSortCode } from '@bugfixes/string-utils'
 *
 * const result = formatSortCode('601613')
 * // '60-16-13'
 * ```
 */
export function formatSortCode(str: string): string {
  return splitIntoChunks(str.replace(nonDigitsRegEx, ''), 2).join('-')
}
