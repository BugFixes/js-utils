import type {
  UrlSearchParamValue,
  UrlSearchParams,
} from './types'

const numberRegEx = /^\d+(\.\d+)?$/
const dateRegEx = /^(19|20)[0-9][0-9]-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]\.\d{3}Z$/

/**
 * Parses a URL search string into a JavaScript object.
 *
 * @remarks Numbers, booleans, dates in simplified extended ISO format, null and undefined will be automatically cast into their value types
 * @param search - The URL search string to parse
 * @returns An object with the parsed parameters
 * @public
 *
 * @example
 * ```javascript
 * import { parseUrlSearchParams } from '@bugfixes/url-utils'
 *
 * const result = parseUrlSearchParams('?foo=bar')
 * // { foo: bar }
 * ```
 */
export function parseUrlSearchParams(search: string): UrlSearchParams {
  const normalizedSearch = search.replace(/^\?/, '')
  const parts = normalizedSearch.split('&')
  const output: UrlSearchParams = {}

  parts.forEach(function (part) {
    const [key, value] = part.split('=')
    const decodedKey = decodeURIComponent(key)
    let decodedValue: UrlSearchParamValue = decodeURIComponent(value)

    if (decodedValue === 'true') {
      decodedValue = true
    } else if (decodedValue === 'false') {
      decodedValue = false
    } else if (numberRegEx.test(decodedValue)) {
      decodedValue = parseFloat(decodedValue)
    } else if (dateRegEx.test(decodedValue)) {
      decodedValue = new Date(decodedValue)
    } else if (decodedValue === 'null') {
      decodedValue = null
    } else if (decodedValue === 'undefined') {
      decodedValue = undefined
    }

    if (output.hasOwnProperty(decodedKey)) {
      if (Array.isArray(output[decodedKey])) {
        (output[decodedKey] as any[]).push(decodedValue)
      } else {
        output[decodedKey] = [output[decodedKey] as any, decodedValue]
      }
    } else {
      output[decodedKey] = decodedValue
    }
  })

  return output
}
