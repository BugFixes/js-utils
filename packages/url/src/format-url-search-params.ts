import type {
  UrlSearchParams,
} from './types'

/**
 * Encode a value to a format compatible with a URL component.
 *
 * @param value - The value to be encoded
 * @returns A URI encoded value
 */
function encodeValue(value: any): string {
  let encodedValue: string

  if (typeof value === 'undefined') {
    encodedValue = 'undefined'
  } else if (value instanceof Date) {
    encodedValue = value.toISOString()
  } else {
    encodedValue = String(value)
  }

  return encodeURIComponent(encodedValue)
}

/**
 * Formats a JavaScript object into a valid URL search string.
 *
 * @remarks Given an empty object an empty string will be returned
 * @param params - The parameters objecte to format
 * @returns A valid URL search string with the values from the provided object
 * @public
 *
 * @example
 * ```javascript
 * import { formatUrlSearchParams } from '@bugfixes/url-utils'
 *
 * const result = formatUrlSearchParams({ foo: 'bar' })
 * // '?foo=bar'
 * ```
 */
export function formatUrlSearchParams(params: UrlSearchParams): string {
  const search = Object.entries(params)
    .reduce(function (acc: string[], [param, value]) {
      const encodedKey = encodeURIComponent(param)

      if (typeof value === 'undefined') {
        return acc
      }

      // Handle arrays
      if (Array.isArray(value)) {
        value.forEach(function (valueElement) {
          acc.push(`${encodedKey}=${encodeValue(valueElement)}`)
        })

        // Handle single values
      } else {
        acc.push(`${encodedKey}=${encodeValue(value)}`)
      }

      return acc
    }, [])
    .filter(function (part) {
      return part !== ''
    })
    .join('&')

  return search ? `?${search}` : search
}
