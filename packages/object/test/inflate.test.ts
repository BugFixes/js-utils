import {
  inflate,
} from '../src'

describe('inflate()', function () {
  test('inflates an object correctly', function () {
    const input = {
      'a': 1,
      'b.c': null,
      'b.d.e': 'test',
      'f.0': 'foobar',
    }
    const output = inflate(input)

    expect(output).toEqual({
      a: 1,
      b: {
        c: null,
        d: { e: 'test' },
      },
      f: { 0: 'foobar' },
    })
  })
})
