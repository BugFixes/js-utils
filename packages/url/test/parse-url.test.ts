import {
  parseUrl,
} from '../src'

describe('parseUrl()', function () {
  test('parses a URL into its parts', function () {
    const input = 'https://username:password@www.bugfix.es:3600/foo/bar?search=test#hash'
    const output = parseUrl(input)

    expect(output).toEqual({
      hash: 'hash',
      hostname: 'www.bugfix.es',
      password: 'password',
      pathname: '/foo/bar',
      port: '3600',
      protocol: 'https:',
      searchParams: { search: 'test' },
      username: 'username',
    })
  })
})
