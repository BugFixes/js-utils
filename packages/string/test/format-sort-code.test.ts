import {
  formatSortCode,
} from '../src'

describe('formatSortCode()', function () {
  test('correctly formats a sort code with only digits', function () {
    const input = '601613'
    const output = formatSortCode(input)

    expect(output).toBe('60-16-13')
  })

  test('correctly formats a sort code with spaces', function () {
    const input = '60 16 13'
    const output = formatSortCode(input)

    expect(output).toBe('60-16-13')
  })

  test('correctly formats a sort code with slashes', function () {
    const input = '60/16/13'
    const output = formatSortCode(input)

    expect(output).toBe('60-16-13')
  })

  test('correctly formats a sort code with dots', function () {
    const input = '60.16.13'
    const output = formatSortCode(input)

    expect(output).toBe('60-16-13')
  })

  test('correctly formats a sort code with unusual grouping', function () {
    const input = '6016-13'
    const output = formatSortCode(input)

    expect(output).toBe('60-16-13')
  })

  test('does not change an already formatted string', function () {
    const input = '60-16-13'
    const output = formatSortCode(input)

    expect(output).toBe('60-16-13')
  })
})
