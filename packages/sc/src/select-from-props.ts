import type {
  Props,
  Selector,
} from './types'

/**
 * Creates a selector function to select a given property from the component props.
 * This selector function can then be used in Styled Components template strings to interpolate values.
 *
 * @param key - The property to be selected from the component props
 * @returns A selector function which selects the given key from the component props
 * @public
 *
 * @example
 * ```javascript
 * import { css } from 'styled-components`
 * import { selectFromProps } from '@bugfixes/sc-utils'
 *
 * const styles = css`
 *   color: ${selectFromProps('textColor')}
 * `
 * ```
 */
export function selectFromProps(key: string): Selector {
  return function (props: Props): any {
    return props[key] // eslint-disable-line @typescript-eslint/no-unsafe-return
  }
}
