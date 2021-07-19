import {
  splitIntoChunks,
} from '../src'

describe('splitIntoChunks()', function () {
  test('splits a string into equal sized chunks', function () {
    const input = '12345678901234567890'
    const output = splitIntoChunks(input, 4)

    expect(output).toEqual([
      '1234', '5678', '9012', '3456', '7890',
    ])
  })

  test('splits a string unequal sized chunks', function () {
    const input = 'foobar'
    const output = splitIntoChunks(input, 4)

    expect(output).toEqual(['foob', 'ar'])
  })
})
