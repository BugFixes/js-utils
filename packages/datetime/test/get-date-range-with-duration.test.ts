import {
  addDuration,
} from '../src/add-duration'
import {
  subtractDuration,
} from '../src/subtract-duration'
import {
  getDateRangeWithDuration,
} from '../src'

jest.mock('../src/add-duration')
jest.mock('../src/subtract-duration')

describe('getDateRangeWithDuration()', function () {
  const addDurationSpy = addDuration as jest.Mock
  const subtractDurationSpy = subtractDuration as jest.Mock
  const inputDate = new Date(Date.UTC(1987, 4, 14, 16, 25, 12, 578))
  const inputDuration = { years: 2 }

  beforeEach(function () {
    const originalAddDuration = jest.requireActual('../src/add-duration').addDuration
    const originalSubtractDuration = jest.requireActual('../src/subtract-duration').subtractDuration

    addDurationSpy.mockImplementation(originalAddDuration)
    subtractDurationSpy.mockImplementation(originalSubtractDuration)
  })

  test('creates a range from a date', function () {
    const output = getDateRangeWithDuration({ from: inputDate }, inputDuration)

    expect(addDurationSpy).toHaveBeenCalledWith(inputDate, inputDuration)
    expect(output.from.toISOString()).toBe('1987-05-14T16:25:12.578Z')
    expect(output.to.toISOString()).toBe('1989-05-14T16:25:12.578Z')
  })

  test('creates a range to a date', function () {
    const output = getDateRangeWithDuration({ to: inputDate }, inputDuration)

    expect(subtractDurationSpy).toHaveBeenCalledWith(inputDate, inputDuration)
    expect(output.from.toISOString()).toBe('1985-05-14T16:25:12.578Z')
    expect(output.to.toISOString()).toBe('1987-05-14T16:25:12.578Z')
  })

  test('throws an error if no `from` or `to` dates are provided', function () {
    expect(function () {
      // @ts-expect-error Ignoring the type requirements to test error
      getDateRangeWithDuration({}, inputDuration)
    }).toThrow()
  })
})
