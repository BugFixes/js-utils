import {
  formatUrlSearchParams,
} from '../src'

describe('formatUrlSearchParams()', function () {
  test('formats an empty URL search string', function () {
    const output = formatUrlSearchParams({})

    expect(output).toBe('')
  })

  test('formats a string value', function () {
    const output = formatUrlSearchParams({ foo: 'bar' })

    expect(output).toBe('?foo=bar')
  })

  test('formats multiple values', function () {
    const output = formatUrlSearchParams({ bar: 'foo', foo: 'bar' })

    expect(output).toBe('?bar=foo&foo=bar')
  })

  test('formats an integer value', function () {
    const output = formatUrlSearchParams({ foo: 10 })

    expect(output).toBe('?foo=10')
  })

  test('formats a float value', function () {
    const output = formatUrlSearchParams({ foo: 1.5 })

    expect(output).toBe('?foo=1.5')
  })

  test('formats a boolean value', function () {
    const output = formatUrlSearchParams({ bar: false, foo: true })

    expect(output).toBe('?bar=false&foo=true')
  })

  test('formats a date value', function () {
    const output = formatUrlSearchParams({ foo: new Date('2011-10-05T14:48:02.342Z') })

    expect(output).toBe('?foo=2011-10-05T14%3A48%3A02.342Z')
  })

  test('formats a null value', function () {
    const output = formatUrlSearchParams({ foo: null })

    expect(output).toBe('?foo=null')
  })

  test('formats an undefined value', function () {
    const output = formatUrlSearchParams({ foo: undefined })

    expect(output).toBe('')
  })

  test('formats an array value', function () {
    const output = formatUrlSearchParams({
      foo: [
        'foobar',
        2,
        1.5,
        true,
        new Date('2011-10-05T14:48:02.342Z'),
        null,
        undefined,
      ],
    })

    expect(output).toBe('?foo=foobar&foo=2&foo=1.5&foo=true&foo=2011-10-05T14%3A48%3A02.342Z&foo=null&foo=undefined')
  })
})
