import {
  subtractDuration,
} from '../src'

describe('subtractDuration()', function () {
  test('subtracts years from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, { years: 2 })

    expect(output.toISOString()).toBe('1985-05-14T16:25:12.578Z')
  })

  test('subtracts months from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, { months: 1 })

    expect(output.toISOString()).toBe('1987-04-14T16:25:12.578Z')
  })

  test('subtracts weeks from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, { weeks: 2 })

    expect(output.toISOString()).toBe('1987-04-30T16:25:12.578Z')
  })

  test('subtracts days from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, { days: 2 })

    expect(output.toISOString()).toBe('1987-05-12T16:25:12.578Z')
  })

  test('subtracts hours from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, { hours: 2 })

    expect(output.toISOString()).toBe('1987-05-14T14:25:12.578Z')
  })

  test('subtracts minutes from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, { minutes: 2 })

    expect(output.toISOString()).toBe('1987-05-14T16:23:12.578Z')
  })

  test('subtracts seconds from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, { seconds: 2 })

    expect(output.toISOString()).toBe('1987-05-14T16:25:10.578Z')
  })

  test('subtracts milliseconds from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, { milliseconds: 2 })

    expect(output.toISOString()).toBe('1987-05-14T16:25:12.576Z')
  })

  test('subtracts a mix of duration units from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, {
      days: 9,
      hours: 6,
      milliseconds: 2,
      minutes: 8,
      months: 5,
      seconds: 7,
      weeks: 4,
      years: 3,
    })

    expect(output.toISOString()).toBe('1983-11-07T11:17:05.576Z')
  })

  test('subtracts an ISO 8601 duration string from a date', function () {
    const input = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
    const output = subtractDuration(input, 'P1Y2M3W4DT11H10M2S')

    expect(output.toISOString()).toBe('1986-02-17T06:15:10.578Z')
  })
})
