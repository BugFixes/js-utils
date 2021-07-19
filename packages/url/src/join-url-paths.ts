const leadingSlashRegEx = /^\//
const trailingSlashRegEx = /\/$/

/**
 * Joins all given path segments together and normalizes the resulting path.
 *
 * @param paths - A sequence of path segments
 * @returns The normalized resulting path
 * @public
 *
 * @example
 * ```javascript
 * import { joinUrlPaths } from '@bugfixes/url-utils'
 *
 * const result = joinUrlPaths('foo', 'bar')
 * // 'foo/bar'
 * ```
 */
export function joinUrlPaths(...paths: string[]): string {
  let isRootPath: boolean | null = null

  const output = paths.filter(function (path) {
    if (path !== '' && isRootPath === null) {
      if (path.startsWith('/')) {
        isRootPath = true
      } else {
        isRootPath = false
      }
    }

    return path !== '' && path !== '/'
  }).map(function (path, index) {
    if (index !== 0) {
      return path.replace(trailingSlashRegEx, '').replace(leadingSlashRegEx, '')
    }

    return path.replace(trailingSlashRegEx, '')
  }).join('/')

  if (isRootPath === true && !output.startsWith('/')) { // eslint-disable-line @typescript-eslint/no-unnecessary-condition
    return `/${output}`
  }

  return output
}
