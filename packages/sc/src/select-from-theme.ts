import type {
  Props,
  Selector,
} from './types'

/**
 * Creates a selector function to select a given property from the Styled Components theme in use.
 * This selector function can then be used in Styled Components template strings to interpolate values.
 *
 * @param key - The property to be selected from the Styled Components theme
 * @returns A selector function which selects the given key from the current Styled Components theme
 * @public
 *
 * @example
 * ```javascript
 * import { css } from 'styled-components`
 * import { selectFromTheme } from '@bugfixes/sc-utils'
 *
 * const styles = css`
 *   color: ${selectFromTheme('textColor')}
 * `
 * ```
 */
export function selectFromTheme(key: string): Selector {
  return function (props: Props): any {
    return props.theme[key] // eslint-disable-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  }
}
