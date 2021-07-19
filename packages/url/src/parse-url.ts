import {
  parseUrlSearchParams,
} from './parse-url-search-params'
import {
  normalizeHash,
  normalizePort,
  normalizeProtocol,
} from './utils'
import type { UrlDescriptor } from './types'

/**
 * Parses a URL string into a URL descriptor object.
 *
 * @param url - The URL to parse
 * @returns A URL descriptor object that can be used to reconstruct the URL
 * @public
 *
 * @example
 * ```javascript
 * import { parseUrl } from '@bugfixes/url-utils'
 *
 * const result = parseUrl('https://www.bugfix.es:3600/#foobar')
 * // {
 * //   hash: 'foobar',
 * //   hostname: 'www.bugfix.es',
 * //   password: '',
 * //   pathname: '/',
 * //   port: '3600',
 * //   protocol: 'https:',
 * //   searchParams: { },
 * //   username: '',
 * // }
 * ```
 */
export function parseUrl(url: string): UrlDescriptor {
  const parsed = new URL(url)

  return {
    hash: normalizeHash(parsed.hash),
    hostname: parsed.hostname,
    password: parsed.password,
    pathname: parsed.pathname,
    port: normalizePort(parsed.port),
    protocol: normalizeProtocol(parsed.protocol),
    searchParams: parseUrlSearchParams(parsed.search),
    username: parsed.username,
  }
}
