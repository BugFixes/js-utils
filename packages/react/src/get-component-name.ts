import type * as React from 'react'

/**
 * Get the name of a React component.
 *
 * @param Component - The React component to extract the name of
 * @returns The name of the component if available, or `Component` if unavailable
 * @public
 *
 * @example
 * ```javascript
 * import { getComponentName } from '@bugfixes/react-utils'
 *
 * function Foobar() {
 *   return <div>Foobar</div>
 * }
 *
 * const componentName = getComponentName(Foobar)
 * // 'Foobar'
 * ```
 */
export function getComponentName<P>(Component: React.ComponentType<P>): string { // eslint-disable-line @typescript-eslint/naming-convention
  return Component.displayName as string || Component.name || 'Component'
}
