import {
  selectFromProps,
} from '../src'

describe('selectFromProps()', function () {
  const props = {
    foo: 'bar',
  }

  test('creates a selector function for a given property', function () {
    const output = selectFromProps('foo')

    expect(output(props)).toBe(props.foo)
  })
})
