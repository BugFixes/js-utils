import type {
  DeflatedObject,
  InflatedObject,
  Primitive,
} from './types'

/**
 * Deflate an object into a shallow depth object with keys in dot notation.
 * The values of the object will all be primitive data types.
 *
 * @param obj - An object to be deflated
 * @returns A deflated representation of the given object
 * @public
 *
 * @example
 * ```javascript
 * import { deflate } from '@bugfixes/object-utils'
 *
 * const obj = {
 *   a: 'foo',
 *   b: {
 *     c: 'bar',
 *   }
 * }
 *
 * deflate(obj)
 * // { 'a': 'foo', 'b.c': 'bar' }
 * ```
 */
export function deflate(obj: InflatedObject): DeflatedObject {
  const output: DeflatedObject = {}

  Object.entries(obj).forEach(function ([key, value]) {
    if (value !== null && typeof value === 'object') {
      Object.entries(deflate(value))
        .forEach(function ([nestedKey, nestedValue]) {
          output[`${key}.${nestedKey}`] = nestedValue
        })

      return
    }

    output[key] = value as Primitive
  })

  return output
}
