/**
 * Creates a promise that resolves after the given number of milliseconds.
 *
 * @param time - The time of the timeout in milliseconds
 * @public
 *
 * @example
 * ```javascript
 * import { timeout } from '@bugfixes/timer-utils'
 *
 * timeout(5000).then(function () {
 *   // Do something
 * })
 *
 * // OR
 *
 * async function foobar() {
 *   await timeout(5000)
 *   // Do something
 * }
 * ```
 */
export async function timeout(time: number): Promise<void> {
  await new Promise(function (resolve) {
    setTimeout(resolve, time)
  })
}
