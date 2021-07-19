import {
  localDateToUTCDate,
} from '../src'

describe('localDateToUTCDate()', function () {
  test('transposes a local date to an equal UTC date', function () {
    const input = new Date(2020, 3, 21, 12, 10, 5, 213)
    const output = localDateToUTCDate(input)

    expect(output.toISOString()).toBe('2020-04-21T12:10:05.213Z')
  })
})
