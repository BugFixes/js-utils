import type {
  Props,
  Selector,
} from './types'

type StylesMap = {
  [property: string]: string | number | Selector | null | undefined,
}

type StyleMapper = (props: Props)=> string

/**
 * Creates a CSS string to be used when interpolating styles in Styled Components.
 *
 * @param map - A map of CSS properties and corresponding values or selectors
 * @param props - The props of the Styled Component
 * @returns The resulting CSS string
 */
function mapStyles(map: StylesMap, props: Props): string {
  return Object.entries(map).reduce(function (output, [key, value]) {
    const computedValue = typeof value === 'function' ? value(props) : value

    if (computedValue === null || typeof computedValue === 'undefined') {
      return output
    }

    return `${output}${key}:${computedValue as string};`
  }, '')
}

/**
 * Takes a map of CSS properties and corresponding values or selectors and creates a style mapping function.
 * The style mapping function returned will take the props of a Styled Component and output valid CSS without empty properties.
 *
 * @param map - A map of CSS properties and corresponding values or selectors
 * @returns A style mapping function to generate valid CSS from the props and given values
 * @public
 *
 * @example
 * ```javascript
 * import { css } from 'styled-components`
 * import { selectFromTheme, stylesFromMap } from '@bugfixes/sc-utils'
 *
 * const styles = css`
 *   ${stylesFromMap({
 *     color: selectFromTheme('textColor'),
 *     'font-size': '16px',
 *   })}
 * `
 * ```
 */
export function stylesFromMap(map: StylesMap): StyleMapper {
  return function (props: Props): string {
    return mapStyles(map, props)
  }
}
