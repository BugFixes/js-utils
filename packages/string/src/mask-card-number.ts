import {
  splitIntoChunks,
} from './split-into-chunks'

const nonDigitsRegEx = /[^0-9]/g
const nonLast4CharRegEx = /.(?=.{4,})/g

/**
 * Masks a card number so that only the last 4 digits are visible.
 *
 * @param str - The card number to be masked
 * @param maskChar - The character to use for masking
 * @returns The card number will all digits except the last 4 masked
 * @public
 *
 * ```javascript
 * import { maskCardNumber } from '@bugfixes/string-utils`
 *
 * const result = maskCardNumber('6771 7980 2500 0004')
 * // '**** **** **** 0004'
 * ```
 */
export function maskCardNumber(str: string, maskChar = '*'): string {
  const maskedStr = str.replace(nonDigitsRegEx, '').replace(nonLast4CharRegEx, maskChar)

  return splitIntoChunks(maskedStr, 4).join(' ')
}
