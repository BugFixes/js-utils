import {
  selectFromMap,
  selectFromProps,
  selectFromTheme,
} from '../src'

describe('selectFromMap()', function () {
  const props = {
    size: 'large',
    theme: {
      sizeLarge: '24px',
      sizeMedium: '16px',
      sizeSmall: '12px',
    },
  }
  const selector = selectFromProps('size')

  test('creates a switcher', function () {
    const output = selectFromMap(selector, { foo: 'bar' })

    expect(typeof output).toBe('function')
    expect(output).toHaveLength(1)
  })

  describe('generated switcher', function () {
    test('returns a selected explicit value', function () {
      const output = selectFromMap(selector, {
        large: 'l',
        medium: 'm',
        small: 's',
      })

      expect(output(props)).toBe('l')
    })

    test('returns a selected value from a selector', function () {
      const output = selectFromMap(selector, {
        large: selectFromTheme('sizeLarge'),
        medium: selectFromTheme('sizeMedium'),
        small: selectFromTheme('sizeSmall'),
      })

      expect(output(props)).toBe('24px')
    })

    test('returns undefined if the selector returns undefined', function () {
      const output = selectFromMap(function () {
        return undefined
      }, {
        large: 'l',
        medium: 'm',
        small: 's',
      })

      expect(output(props)).toBeUndefined()
    })

    test('returns undefined if the value does not exist', function () {
      const output = selectFromMap(function () {
        return 'xl'
      }, {
        large: 'l',
        medium: 'm',
        small: 's',
      })

      expect(output(props)).toBeUndefined()
    })
  })
})
