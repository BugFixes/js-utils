import {
  normalizeHash,
  normalizePort,
  normalizeProtocol,
} from '../src/utils'

describe('Internal utility function', function () {
  describe('normalizeProtocol()', function () {
    test('returns an empty string if no protocol is provided', function () {
      const output = normalizeProtocol()

      expect(output).toBe('')
    })

    test('appends the `:` colon character if missing', function () {
      const output = normalizeProtocol('https')

      expect(output).toBe('https:')
    })

    test('leaves an already normalized protocol as is', function () {
      const output = normalizeProtocol('https:')

      expect(output).toBe('https:')
    })
  })

  describe('normalizeHash()', function () {
    test('returns an empty string if no hash is provided', function () {
      const output = normalizeHash()

      expect(output).toBe('')
    })

    test('removes the `#` prefix if present', function () {
      const output = normalizeHash('#foobar')

      expect(output).toBe('foobar')
    })

    test('leaves an already normalized hash as is', function () {
      const output = normalizeHash('foobar')

      expect(output).toBe('foobar')
    })
  })

  describe('normalizePort', function () {
    test('returns an empty string if no port is provided', function () {
      const output = normalizePort()

      expect(output).toBe('')
    })

    test('returns a port number regardless of value if no protocol is provided', function () {
      const output = normalizePort('80')

      expect(output).toBe('80')
    })

    test('returns an empty string if protocol is file:', function () {
      const output = normalizePort('80', 'file:')

      expect(output).toBe('')
    })

    test('returns an empty string if port is the default for the given protocol', function () {
      expect(normalizePort('21', 'ftp:')).toBe('')
      expect(normalizePort('80', 'http:')).toBe('')
      expect(normalizePort('443', 'https:')).toBe('')
      expect(normalizePort('80', 'ws:')).toBe('')
      expect(normalizePort('443', 'wss:')).toBe('')
    })

    test('returns the given port if not the default for the given protocol', function () {
      expect(normalizePort('22', 'ftp:')).toBe('22')
      expect(normalizePort('8000', 'http:')).toBe('8000')
      expect(normalizePort('4433', 'https:')).toBe('4433')
      expect(normalizePort('8000', 'ws:')).toBe('8000')
      expect(normalizePort('4433', 'wss:')).toBe('4433')
    })
  })
})
