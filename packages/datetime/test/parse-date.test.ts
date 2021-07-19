import {
  parseDate,
} from '../src/'

describe('parseDate()', function () {
  test('parses a date with a timezone offset', function () {
    const output = parseDate('2011-10-05T14:48:00.000+09:00')

    expect(output.toISOString()).toBe('2011-10-05T05:48:00.000Z')
  })

  test('parses a date with a UTC timezone', function () {
    const output = parseDate('2011-10-05T14:48:00.000Z')

    expect(output.toISOString()).toBe('2011-10-05T14:48:00.000Z')
  })

  test('parses a date without time', function () {
    const output = parseDate('2011-10-05')

    expect(output.toISOString()).toBe('2011-10-05T00:00:00.000Z')
  })

  test('parses a date with hours and minutes', function () {
    const output = parseDate('2011-10-05T14:48')

    expect(output.toISOString()).toBe('2011-10-05T14:48:00.000Z')
  })

  test('parses a date with hours, minutes and seconds', function () {
    const output = parseDate('2011-10-05T14:48:10')

    expect(output.toISOString()).toBe('2011-10-05T14:48:10.000Z')
  })

  test('parses a date with time', function () {
    const output = parseDate('2011-10-05T14:48:10.023')

    expect(output.toISOString()).toBe('2011-10-05T14:48:10.023Z')
  })

  test('throws an error when using an unsupported date format', function () {
    expect(function () {
      parseDate('2011-10-05T')
    }).toThrow()
  })
})
