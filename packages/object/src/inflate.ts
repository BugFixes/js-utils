import type {
  DeflatedObject,
  InflatedObject,
} from './types'

/**
 * Split a dot notation object key into its parts.
 *
 * @param key - An object key in dot notation
 * @returns And array of key parts
 */
function getKeyParts(key: string): string[] {
  return key.split('.')
}

/**
 * Inflate a deflated object back to its former shape.
 *
 * @remarks Object types such as arrays will be converted to plain objects
 * @param obj - A deflated object to be inflated
 * @returns An inflated representation of the given object
 * @public
 *
 * @example
 * ```javascript
 * import { inflate } from '@bugfixes/object-utils'
 *
 * const obj = {
 *   'a': 'foo',
 *   'b.c': 'bar',
 * }
 *
 * inflate(obj)
 * // { a: 'foo', b: { c: 'bar' } }
 * ```
 */
export function inflate(obj: DeflatedObject): InflatedObject {
  const output: InflatedObject = {}

  Object.entries(obj).forEach(function ([key, value]) {
    const keyParts = getKeyParts(key)
    const lastKeyIndex = keyParts.length - 1
    let currentChild = output

    keyParts.forEach(function (keyPart, keyPartIndex) {
      if (keyPartIndex === lastKeyIndex) {
        currentChild[keyPart] = value
      } else {
        if (typeof currentChild[keyPart] === 'undefined') {
          currentChild[keyPart] = {}
        }

        currentChild = currentChild[keyPart] as InflatedObject
      }
    })
  })

  return output
}
