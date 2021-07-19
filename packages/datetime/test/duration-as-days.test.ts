import {
  durationAsDays,
} from '../src'

describe('durationAsDays()', function () {
  test('converts years to days', function () {
    const output = durationAsDays({ years: 2 })

    expect(output).toBe(730)
  })

  test('converts months to days', function () {
    const output = durationAsDays({ months: 2 })

    expect(output).toBe(60)
  })

  test('converts weeks to days', function () {
    const output = durationAsDays({ weeks: 2 })

    expect(output).toBe(14)
  })

  test('maintains days as days', function () {
    const output = durationAsDays({ days: 2 })

    expect(output).toBe(2)
  })

  test('converts hours to days', function () {
    expect(durationAsDays({ hours: 2 })).toBe(2 / 24)
    expect(durationAsDays({ hours: 24 })).toBe(1)
    expect(durationAsDays({ hours: 32 })).toBe(32 / 24)
    expect(durationAsDays({ hours: 48 })).toBe(2)
  })

  test('converts minutes to days', function () {
    expect(durationAsDays({ minutes: 2 })).toBe(2 / 1440)
    expect(durationAsDays({ minutes: 1440 })).toBe(1)
    expect(durationAsDays({ minutes: 1640 })).toBe(1640 / 1440)
    expect(durationAsDays({ minutes: 2880 })).toBe(2)
  })

  test('converts seconds to days', function () {
    expect(durationAsDays({ seconds: 2 })).toBe(2 / 86400)
    expect(durationAsDays({ seconds: 86400 })).toBe(1)
    expect(durationAsDays({ seconds: 89400 })).toBe(89400 / 86400)
    expect(durationAsDays({ seconds: 172800 })).toBe(2)
  })

  test('converts milliseconds to days', function () {
    expect(durationAsDays({ milliseconds: 2 })).toBe(2 / 86400000)
    expect(durationAsDays({ milliseconds: 86400000 })).toBe(1)
    expect(durationAsDays({ milliseconds: 96400000 })).toBe(96400000 / 86400000)
    expect(durationAsDays({ milliseconds: 172800000 })).toBe(2)
  })

  test('converts a mix of units to days', function () {
    const output = durationAsDays({
      days: 4,
      hours: 5,
      milliseconds: 8,
      minutes: 6,
      months: 2,
      seconds: 7,
      weeks: 3,
      years: 1,
    })

    expect(output).toBe(450.2125811111111)
  })

  test('converts an ISO 8601 duration string to days', function () {
    const output = durationAsDays('P1Y2M3W4DT11H10M2S')

    expect(output).toBe(450.46530092592593)
  })
})
