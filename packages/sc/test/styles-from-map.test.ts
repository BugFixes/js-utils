import {
  selectFromProps,
  selectFromTheme,
  stylesFromMap,
} from '../src'

describe('stylesFromMap()', function () {
  const props = {
    theme: {
      bgColor: '#ffffff',
      margin: null,
      textColor: '#00cc00',
    },
    zIndex: 10,
  }

  test('creates a style mapper', function () {
    const output = stylesFromMap({
      foo: 'bar',
    })

    expect(typeof output).toBe('function')
    expect(output).toHaveLength(1)
  })

  describe('generated style mapper', function () {
    test('correctly maps explicit values', function () {
      const output = stylesFromMap({
        'background-color': '#ccffff',
        'color': '#0000cc',
        'margin': null,
        'padding': undefined,
        'z-index': 12,
      })

      expect(output(props)).toMatchSnapshot()
    })

    test('correctly maps selected values', function () {
      const output = stylesFromMap({
        'background-color': selectFromTheme('bgColor'),
        'color': selectFromTheme('textColor'),
        'margin': selectFromTheme('margin'),
        'padding': selectFromTheme('padding'),
        'z-index': selectFromProps('zIndex'),
      })

      expect(output(props)).toMatchSnapshot()
    })
  })
})
