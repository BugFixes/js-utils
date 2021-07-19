import {
  toUTCDateString,
} from '../src'

describe('toUTCDateString()', function () {
  test('outputs a UTC date as an ISO 8601 UTC date string', function () {
    const input = new Date('2020-12-17T02:10:00.000Z')
    const output = toUTCDateString(input)

    expect(output).toBe('2020-12-17')
  })

  test('outputs a date with a timezone offset as an ISO 8601 UTC date string', function () {
    const input = new Date('2020-12-17T02:10:00.000+09:00')
    const output = toUTCDateString(input)

    expect(output).toBe('2020-12-16')
  })
})
