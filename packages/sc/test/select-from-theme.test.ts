import {
  selectFromTheme,
} from '../src'

describe('selectFromTheme()', function () {
  const props = {
    theme: {
      foo: 'bar',
    },
  }

  test('creates a selector function for a given property', function () {
    const output = selectFromTheme('foo')

    expect(output(props)).toBe(props.theme.foo)
  })
})
