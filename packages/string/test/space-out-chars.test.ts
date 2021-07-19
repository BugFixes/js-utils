import {
  spaceOutChars,
} from '../src'

describe('spaceOutChars()', function () {
  test('inserts a space between each character of a string', function () {
    const input = 'foobar'
    const output = spaceOutChars(input)

    expect(output).toBe('f o o b a r')
  })
})
