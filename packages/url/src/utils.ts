const colonSuffixRegEx = /:$/

const hashPrefixRegEx = /^#/

const defaultPortsMap: {[protocol: string]: string } = {
  'ftp:': '21',
  'http:': '80',
  'https:': '443',
  'ws:': '80',
  'wss:': '443',
}

/**
 * Normalize a URL protocol value.
 *
 * @param protocol - A protocol value to normalize
 * @returns The normalized protocol value suffixed with `:`
 */
export function normalizeProtocol(protocol: string = ''): string {
  const normalizedProtocol = protocol.replace(colonSuffixRegEx, '')

  if (!normalizedProtocol) {
    return ''
  }

  return `${normalizedProtocol}:`
}

/**
 * Normalize a URL hash value.
 *
 * @param hash - A hash value to normalize
 * @returns The normalized hash value with the `#` prefix removed
 */
export function normalizeHash(hash: string = ''): string {
  return hash.replace(hashPrefixRegEx, '')
}

/**
 * Normalize a URL post value.
 *
 * @remarks If the port given is the default for the given protocol, an empty string will be returned
 * @param port - A port value to normalize
 * @param protocol - A protocol value to use for evaluating the default port
 * @returns The normalized port value
 */
export function normalizePort(port: string = '', protocol?: string): string {
  if (port === '') {
    return ''
  } else if (typeof protocol !== 'string') {
    return port
  }

  const normalizedProtocol = normalizeProtocol(protocol)

  if (normalizedProtocol === 'file:' || defaultPortsMap[normalizedProtocol] === port) {
    return ''
  }

  return port
}
