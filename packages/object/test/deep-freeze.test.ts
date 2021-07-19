import {
  deepFreeze,
} from '../src'

describe('deepFreeze()', function () {
  test('freezes an object', function () {
    const input = { foo: 'bar' }

    deepFreeze(input)

    expect(Object.isFrozen(input)).toBe(true)
  })

  test('freezes a nested object', function () {
    const input = { foo: { bar: true } }

    deepFreeze(input)

    expect(Object.isFrozen(input.foo)).toBe(true)
  })

  test('freezes an array', function () {
    const input = ['foobar']

    deepFreeze(input)

    expect(Object.isFrozen(input)).toBe(true)
  })

  test('freezes a nested array', function () {
    const input = [['foobar']]

    deepFreeze(input)

    expect(Object.isFrozen(input[0])).toBe(true)
  })

  test('returns the given object', function () {
    const input = { foo: 'bar' }

    const output = deepFreeze(input)

    expect(output).toBe(input)
  })
})
