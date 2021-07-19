import {
  utcDateToLocalDate,
} from '../src'

describe('utcDateToLocalDate()', function () {
  test('transposes a UTC date to an equal local date', function () {
    const input = new Date(Date.UTC(2020, 3, 21, 12, 10, 5, 213))
    const output = utcDateToLocalDate(input)

    expect(output.toISOString()).toBe('2020-04-21T10:10:05.213Z')
  })
})
