import {
  formatUrlSearchParams,
} from './format-url-search-params'
import {
  normalizeHash,
  normalizePort,
  normalizeProtocol,
} from './utils'

import type { UrlDescriptor } from './types'

const slashPrefixRegEx = /^\//

/**
 * Format the protocol part of a URL.
 *
 * @param url - A URL descriptor
 * @returns The protocol part of a URL including the `//` suffix
 */
function formatProtocolPart(url: Partial<UrlDescriptor>): string {
  const protocol = normalizeProtocol(url.protocol)

  return `${protocol}//`
}

/**
 * Format the authentication part of a URL.
 *
 * @remarks An empty string is returned if there is no username defined
 * @param url - A URL descriptor
 * @returns The authentication part of a URL including the `@` suffix
 */
function formatAuthPart(url: Partial<UrlDescriptor>): string {
  const { username, password } = url

  if (typeof username === 'undefined' || !username) {
    return ''
  }

  const usernamePart = encodeURIComponent(username)
  const passwordPart = typeof password !== 'undefined' && password ? `:${encodeURIComponent(password)}` : ''

  return `${usernamePart}${passwordPart}@`
}

/**
 * Format the port part of a URL.
 *
 * @remarks An empty string is returned if there is no port defined
 * @remarks An emtpy string is returned if the port number matches the default for the protocol defined
 * @param url - A URL descriptor
 * @returns The port part of a URL including the `:` prefix
 */
function formatPortPart(url: Partial<UrlDescriptor>): string {
  const { protocol, port } = url
  const normalizedPort = normalizePort(port, protocol)

  if (!normalizedPort) {
    return ''
  }

  return `:${normalizedPort}`
}

/**
 * Format the origin part of a URL.
 *
 * @remarks An empty string is returned if there is no hostname defined
 * @param url - A URL descriptor
 * @returns The origin part of a URL including the protocol, authorization, hostname and port
 */
function formatOriginPart(url: Partial<UrlDescriptor>): string {
  const protocolPart = formatProtocolPart(url)
  const authPart = formatAuthPart(url)
  const portPart = formatPortPart(url)
  const { hostname } = url

  if (typeof hostname !== 'string') {
    return ''
  }

  return `${protocolPart}${authPart}${hostname}${portPart}`
}

/**
 * Format the pathname part of a URL.
 *
 * @param url - A URL descriptor
 * @returns The pathname part of a URL including the `/` prefix
 */
function formatPathnamePart(url: Partial<UrlDescriptor>): string {
  const { pathname = '' } = url
  const normalizedPathname = pathname.replace(slashPrefixRegEx, '')

  return `/${normalizedPathname}`
}

/**
 * Formats the search part of a URL.
 *
 * @remarks An empty string is returned if there are no search parameters defined
 * @param url - A URL descriptor
 * @returns The search part of a URL including the `?` prefix
 */
function formatSearchPart(url: Partial<UrlDescriptor>): string {
  const { searchParams = {} } = url

  return formatUrlSearchParams(searchParams)
}

/**
 * Format the hash part of a URL.
 *
 * @remarks An empty string is returned if the hash has no value
 * @param url - A URL descriptor
 * @returns The hash part of a URL including the `#` prefix
 */
function formatHashPart(url: Partial<UrlDescriptor>): string {
  const normalizedHash = normalizeHash(url.hash)

  if (!normalizedHash) {
    return ''
  }

  return `#${encodeURIComponent(normalizedHash)}`
}

/**
 * Formats a URL string from a URL descriptor object.
 *
 * @param url - A URL descriptor
 * @returns A fully formed URL
 * @public
 *
 * @example
 * ```javascript
 * import { formatUrl } from '@bugfixes/url-utils'
 *
 * const result = formatUrl({
 *   hash: 'foobar',
 *   hostname: 'www.bugfix.es',
 *   password: 'password',
 *   pathname: '/foobar',
 *   port: '3600',
 *   protocol: 'https:',
 *   searchParams: { foo: 'barb' },
 *   username: 'user',
 * })
 * // 'https://user:password@www.bugfix.es:3600/foobar?foo=bar#foobar'
 * ```
 */
export function formatUrl(url: Partial<UrlDescriptor>): string {
  const originPart = formatOriginPart(url)
  const pathnamePart = formatPathnamePart(url)
  const searchPart = formatSearchPart(url)
  const hashPart = formatHashPart(url)

  return `${originPart}${pathnamePart}${searchPart}${hashPart}`
}
