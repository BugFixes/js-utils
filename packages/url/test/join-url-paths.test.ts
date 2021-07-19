import {
  joinUrlPaths,
} from '../src'

describe('joinUrlPaths()', function () {
  test('joins two paths', function () {
    const output = joinUrlPaths('foo', 'bar')

    expect(output).toBe('foo/bar')
  })

  test('joins paths that start or end with slashes', function () {
    const output = joinUrlPaths('foo/', '/bar')

    expect(output).toBe('foo/bar')
  })

  test('joins paths while retaining the leading slash of an absolute path', function () {
    const output = joinUrlPaths('/foo', '/bar')

    expect(output).toBe('/foo/bar')
  })

  test('joins paths while removing the trailing slash', function () {
    const output = joinUrlPaths('foo', 'bar/')

    expect(output).toBe('foo/bar')
  })

  test('joins a host and paths', function () {
    const output = joinUrlPaths('https://www.bugfix.es', '/foo/', '/bar')

    expect(output).toBe('https://www.bugfix.es/foo/bar')
  })

  test('joins empty paths', function () {
    const output = joinUrlPaths('', '', '')

    expect(output).toBe('')
  })

  test('joins single slash paths', function () {
    const output = joinUrlPaths('/', '/', '/')

    expect(output).toBe('/')
  })

  test('joins a mix of single slash and empty paths', function () {
    const output = joinUrlPaths('', '/', '', '/')

    expect(output).toBe('/')
  })

  test('joins single slash paths mixed with other paths with a leading slash', function () {
    const output = joinUrlPaths('/', '/test/', '/')

    expect(output).toBe('/test')
  })
})
