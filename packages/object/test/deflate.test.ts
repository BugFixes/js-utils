import {
  deflate,
} from '../src'

describe('deflate()', function () {
  test('deflates an object correctly', function () {
    const input = {
      a: 1,
      b: {
        c: null,
        d: { e: 'test' },
      },
    }
    const output = deflate(input)

    expect(output).toEqual({
      'a': 1,
      'b.c': null,
      'b.d.e': 'test',
    })
  })
})
