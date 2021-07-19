import {
  parseDuration,
} from '../src/'

describe('parseDuration()', function () {
  test('parses a year based duration', function () {
    const output = parseDuration('P2Y')

    expect(output).toEqual({
      years: 2,
    })
  })

  test('parses a month based duration', function () {
    const output = parseDuration('P2M')

    expect(output).toEqual({
      months: 2,
    })
  })

  test('parses a week based duration', function () {
    const output = parseDuration('P2W')

    expect(output).toEqual({
      weeks: 2,
    })
  })

  test('parses a day based duration', function () {
    const output = parseDuration('P2D')

    expect(output).toEqual({
      days: 2,
    })
  })

  test('parses a hour based duration', function () {
    const output = parseDuration('PT2H')

    expect(output).toEqual({
      hours: 2,
    })
  })

  test('parses a minute based duration', function () {
    const output = parseDuration('PT2M')

    expect(output).toEqual({
      minutes: 2,
    })
  })

  test('parses a second based duration', function () {
    const output = parseDuration('PT2S')

    expect(output).toEqual({
      seconds: 2,
    })
  })

  test('parses a mixed duration', function () {
    const output = parseDuration('P1Y2M3W4DT11H10M2S')

    expect(output).toEqual({
      days: 4,
      hours: 11,
      minutes: 10,
      months: 2,
      seconds: 2,
      weeks: 3,
      years: 1,
    })
  })

  test('throws an error when using an unsupported duration', function () {
    expect(function () {
      parseDuration('XYZ')
    }).toThrow()
  })
})
