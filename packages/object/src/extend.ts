/**
 * Clones all enumerable own properties from one or more source objects to a target object.
 * With this method any getters and setters are kept intact.
 *
 * @param target - The object to apply the sources’ properties to, which is returned after it is modified
 * @param sources - Objects containing the properties you want to apply
 * @returns The target object with the properties from the source objects
 * @public
 *
 * @example
 * ```javascript
 * import { extend } from '@bugfixes/object-utils'
 *
 * const target = {
 *   a: 'foo',
 *   get b() {
 *     return 'bar'
 *   },
 * }
 * const source = {
 *   get a() {
 *     return 'foo'
 *   },
 * }
 *
 * extend(target, source)
 * // { get a() { return 'foo' }, get b() { return 'bar' }}
 * ```
 */
export function extend(target: object, ...sources: object[]): any {
  sources.forEach(function (obj) {
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(obj))
  })

  return target
}
