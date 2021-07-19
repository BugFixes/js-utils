import {
  toLocalDateString,
} from '../src'

describe('toLocalDateString()', function () {
  test('outputs a UTC date as an ISO 8601 local date string', function () {
    const input = new Date('2020-12-17T23:59:00.000Z')
    const output = toLocalDateString(input)

    expect(output).toBe('2020-12-18')
  })

  test('outputs a date with a timezone offset as an ISO 8601 local date string', function () {
    const input = new Date('2020-12-17T02:10:00.000-09:00')
    const output = toLocalDateString(input)

    expect(output).toBe('2020-12-17')
  })
})
