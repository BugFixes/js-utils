import type * as React from 'react'

/**
 * Unwrap a React component wrapped by one or more High Order Components.
 *
 * @remarks This is intended for testing purposes only
 * @param Component - A React component wrapped by High Order Components to unwrap
 * @returns The unwrapped component or the component itself if no wrapped components are found
 * @public
 *
 * @example
 * ```javascript
 * import { unwrapComponent } from '@bugfixes/react-utils'
 * import WrappedComponent from './wrapped-component'
 *
 * const Component = unwrapComponent(WrappedComponent)
 * ```
 */
export function unwrapComponent<P>(
  Component: React.ComponentType<P>, // eslint-disable-line @typescript-eslint/naming-convention
): React.ComponentType<unknown> {
  let output = Component

  // @ts-expect-error The `WrappedComponent` property is a common practice for HOC's
  while (typeof output.WrappedComponent !== 'undefined') {
    // @ts-expect-error The `WrappedComponent` property is a common practice for HOC's
    output = output.WrappedComponent
  }

  return output
}
