/**
 * Freezes an object recursively.
 * The object and its nested objects will no longer be possible to change.
 *
 * @remarks This function modifies the original object.
 * @param obj - The object to freeze
 * @returns The given object in a frozen state
 * @public
 *
 * @example
 * ```javascript
 * import { deepFreeze } from '@bugfixes/object-utils'
 *
 * const obj = {
 *   foo: 'bar',
 * }
 *
 * deepFreeze(obj)
 * ```
 */
export function deepFreeze <T>(obj: T): T {
  if (obj !== null && typeof obj === 'object') {
    Object.values(obj).forEach(deepFreeze)
    Object.freeze(obj)
  }

  return obj
}
