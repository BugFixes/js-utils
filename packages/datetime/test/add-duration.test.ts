import {
  addDuration,
} from '../src'

describe('addDuration()', function () {
  test('adds years to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, { years: 2 })

    expect(output.toISOString()).toBe('1989-05-14T16:25:12.578Z')
  })

  test('adds months to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, { months: 1 })

    expect(output.toISOString()).toBe('1987-06-14T16:25:12.578Z')
  })

  test('adds weeks to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, { weeks: 2 })

    expect(output.toISOString()).toBe('1987-05-28T16:25:12.578Z')
  })

  test('adds days to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, { days: 2 })

    expect(output.toISOString()).toBe('1987-05-16T16:25:12.578Z')
  })

  test('adds hours to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, { hours: 2 })

    expect(output.toISOString()).toBe('1987-05-14T18:25:12.578Z')
  })

  test('adds minutes to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, { minutes: 2 })

    expect(output.toISOString()).toBe('1987-05-14T16:27:12.578Z')
  })

  test('adds seconds to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, { seconds: 2 })

    expect(output.toISOString()).toBe('1987-05-14T16:25:14.578Z')
  })

  test('adds milliseconds to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, { milliseconds: 2 })

    expect(output.toISOString()).toBe('1987-05-14T16:25:12.580Z')
  })

  test('adds a mix of duration units to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, {
      days: 9,
      hours: 6,
      milliseconds: 2,
      minutes: 8,
      months: 5,
      seconds: 7,
      weeks: 4,
      years: 3,
    })

    expect(output.toISOString()).toBe('1990-11-20T23:33:19.580Z')
  })

  test('adds an ISO 8601 duration string to a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = addDuration(input, 'P1Y2M3W4DT11H10M2S')

    expect(output.toISOString()).toBe('1988-08-09T03:35:14.578Z')
  })
})
