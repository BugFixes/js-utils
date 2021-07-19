import {
  unique,
} from '../src'

describe('Array unique()', function () {
  test('removes duplicate mixed value types', function () {
    const input = [
      'test',
      'test',
      1,
      1,
      true,
      true,
    ]
    const output = unique(input)

    expect(output).toEqual([
      'test',
      1,
      true,
    ])
  })

  test('keeps the order in which values are first found', function () {
    const input = [
      1,
      2,
      3,
      3,
      4,
      1,
      5,
    ]
    const output = unique(input)

    expect(output).toEqual([
      1,
      2,
      3,
      4,
      5,
    ])
  })

  test('creates a new array', function () {
    const input: any[] = []
    const output = unique(input)

    expect(output).not.toBe(input)
  })
})
