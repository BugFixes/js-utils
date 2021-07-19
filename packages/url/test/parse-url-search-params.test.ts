import {
  parseUrlSearchParams,
} from '../src'

describe('parseUrlSearchParams()', function () {
  test('parses a string type parameter', function () {
    const output = parseUrlSearchParams('?foo=bar')

    expect(output).toEqual({ foo: 'bar' })
  })

  test('parses an integer type parameter', function () {
    const output = parseUrlSearchParams('?foo=10')

    expect(output).toEqual({ foo: 10 })
  })

  test('parses a float type parameter', function () {
    const output = parseUrlSearchParams('?foo=1.5')

    expect(output).toEqual({ foo: 1.5 })
  })

  test('parses a boolean type parameter', function () {
    const trueOutput = parseUrlSearchParams('?foo=true')
    const falseOutput = parseUrlSearchParams('?foo=false')

    expect(trueOutput).toEqual({ foo: true })
    expect(falseOutput).toEqual({ foo: false })
  })

  test('parses a date type parameter', function () {
    const output = parseUrlSearchParams('?foo=2011-10-05T14%3A48%3A02.342Z')

    expect(output).toEqual({ foo: new Date('2011-10-05T14:48:02.342Z') })
  })

  test('parses a null type parameter', function () {
    const output = parseUrlSearchParams('?foo=null')

    expect(output).toEqual({ foo: null })
  })

  test('parses an undefined type parameter', function () {
    const output = parseUrlSearchParams('?foo=undefined')

    expect(output).toEqual({ foo: undefined })
  })

  test('parses search string without question mark prefix', function () {
    const output = parseUrlSearchParams('foo=bar')

    expect(output).toEqual({ foo: 'bar' })
  })

  test('parses multiple parameters', function () {
    const output = parseUrlSearchParams('?foo=1&bar=true')

    expect(output).toEqual({ bar: true, foo: 1 })
  })

  test('parses arrays', function () {
    const output = parseUrlSearchParams('?foo=foobar&foo=2&foo=1.5&foo=true&foo=2011-10-05T14%3A48%3A02.342Z&foo=null&foo=undefined')

    expect(output).toEqual({
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
  })
})
