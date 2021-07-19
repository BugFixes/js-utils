import {
  appendUrlSearchParams,
} from '../src'

describe('appendUrlSearchParams()', function () {
  test('appends search parameters to a URL without search parameters', function () {
    const input = { foo: true }
    const output = appendUrlSearchParams('https://www.bugfix.es/test', input)

    expect(output).toBe('https://www.bugfix.es/test?foo=true')
  })

  test('appends search parameters to a URL with existing search parameters', function () {
    const input = { foo: true }
    const output = appendUrlSearchParams('https://www.bugfix.es/test?bar=true', input)

    expect(output).toBe('https://www.bugfix.es/test?bar=true&foo=true')
  })

  test('overwrites existing search parameters in a URL', function () {
    const input = { foo: false }
    const output = appendUrlSearchParams('https://www.bugfix.es/test?foo=true', input)

    expect(output).toBe('https://www.bugfix.es/test?foo=false')
  })
})
