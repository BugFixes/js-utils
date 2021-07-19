import type {
  Props,
  Selector,
} from './types'

type SwitchMap = {
  [caseValue: string]: string | number | Selector | null | undefined,
}

type Switcher = (props: Props)=> any

/**
 * Takes a selector function and a map of keys and values and creates a switcher function which will return the value associated with the key returned by the selector.
 *
 * @param selector - A selector function to receive the component props and return a value which will be used as the key for the map
 * @param map - A map of possible values to be returned by the selector and corresponding value to be returned in response
 * @returns A switcher function to select a value from the given map based on the result of the given selector
 * @public
 *
 * @example
 * ```javascript
 * import { css } from 'styled-components`
 * import { selectFromMap, selectFromProps } from '@bugfixes/sc-utils'
 *
 * const styles = css`
 *   color: ${selectFromMap(selectFromProps('colorScheme'), {
 *     light: selectFromTheme('lightTextColor'),
 *     dark: selectFromTheme('darkTextColor'),
 *   })}
 * `
 * ```
 */
export function selectFromMap(selector: Selector, map: SwitchMap): Switcher {
  return function (props: Props): any {
    const value = selector(props)
    let mappedValue: unknown = map[value as string]

    if (typeof mappedValue === 'function') {
      mappedValue = mappedValue(props)
    }

    return mappedValue
  }
}
