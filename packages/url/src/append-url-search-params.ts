import {
  formatUrl,
} from './format-url'
import {
  parseUrl,
} from './parse-url'
import type {
  UrlSearchParams,
} from './types'

/**
 * Appends search parameters to an existing URL without removing existing search parameters or other URL parts.
 *
 * @param url - A URL to which the search parameters should be appended
 * @param searchParams - An object with search parameters to append
 * @returns The given URL with the given search parameters appended
 * @public
 *
 * @example
 * ```javascript
 * import { appendUrlSearchParams } from '@bugfixes/url-utils'
 *
 * const result = appendUrlSearchParams('https://www.bugfix.es/?foo=true', { bar: true })
 * // 'https://www.bugfix.es/?foo=true&bar=true'
 * ```
 */
export function appendUrlSearchParams(url: string, searchParams: UrlSearchParams): string {
  const parsedUrl = parseUrl(url)

  return formatUrl({
    ...parsedUrl,
    searchParams: {
      ...parsedUrl.searchParams,
      ...searchParams,
    },
  })
}
