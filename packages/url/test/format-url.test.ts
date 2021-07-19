import { formatUrl } from '../src'

describe('formatUrl()', function () {
  test('correctly formats a basic URL with hostname only', function () {
    const input = { hostname: 'www.bugfix.es' }
    const output = formatUrl(input)

    expect(output).toBe('//www.bugfix.es/')
  })

  test('correctly formats a URL with hostname and protocol', function () {
    const input = {
      hostname: 'www.bugfix.es',
      protocol: 'https:',
    }
    const output = formatUrl(input)

    expect(output).toBe('https://www.bugfix.es/')
  })

  test('correctly formats a URL with hostname and protocol with normalization', function () {
    const input = {
      hostname: 'www.bugfix.es',
      protocol: 'https',
    }
    const output = formatUrl(input)

    expect(output).toBe('https://www.bugfix.es/')
  })

  test('correctly formats a URL with hostname and port', function () {
    const input = {
      hostname: 'www.bugfix.es',
      port: '4433',
    }
    const output = formatUrl(input)

    expect(output).toBe('//www.bugfix.es:4433/')
  })

  test('omits the port for file protocols', function () {
    const input = {
      hostname: 'www.bugfix.es',
      port: '4433',
      protocol: 'file',
    }
    const output = formatUrl(input)

    expect(output).toBe('file://www.bugfix.es/')
  })

  test('omits the default port for FTP protocols', function () {
    const input = {
      hostname: 'www.bugfix.es',
      port: '21',
      protocol: 'ftp',
    }
    const output = formatUrl(input)

    expect(output).toBe('ftp://www.bugfix.es/')
  })

  test('omits the default port for HTTP protocols', function () {
    const input = {
      hostname: 'www.bugfix.es',
      port: '80',
      protocol: 'http',
    }
    const output = formatUrl(input)

    expect(output).toBe('http://www.bugfix.es/')
  })

  test('omits the default port for HTTPS protocols', function () {
    const input = {
      hostname: 'www.bugfix.es',
      port: '443',
      protocol: 'https',
    }
    const output = formatUrl(input)

    expect(output).toBe('https://www.bugfix.es/')
  })

  test('omits the default port for WS protocols', function () {
    const input = {
      hostname: 'www.bugfix.es',
      port: '80',
      protocol: 'ws',
    }
    const output = formatUrl(input)

    expect(output).toBe('ws://www.bugfix.es/')
  })

  test('omits the default port for WSS protocols', function () {
    const input = {
      hostname: 'www.bugfix.es',
      port: '443',
      protocol: 'wss',
    }
    const output = formatUrl(input)

    expect(output).toBe('wss://www.bugfix.es/')
  })

  test('correctly formats a URL with hostname and username', function () {
    const input = {
      hostname: 'www.bugfix.es',
      username: 'username',
    }
    const output = formatUrl(input)

    expect(output).toBe('//username@www.bugfix.es/')
  })

  test('correctly formats a URL with hostname, username and password', function () {
    const input = {
      hostname: 'www.bugfix.es',
      password: 'password',
      username: 'username',
    }
    const output = formatUrl(input)

    expect(output).toBe('//username:password@www.bugfix.es/')
  })

  test('omits the authentication part of a URL if the username is missing', function () {
    const input = {
      hostname: 'www.bugfix.es',
      password: 'password',
    }
    const output = formatUrl(input)

    expect(output).toBe('//www.bugfix.es/')
  })

  test('omits the authentication part of a URL if the username is empty', function () {
    const input = {
      hostname: 'www.bugfix.es',
      password: 'password',
      username: '',
    }
    const output = formatUrl(input)

    expect(output).toBe('//www.bugfix.es/')
  })

  test('omits the password part of a URL if the password is empty', function () {
    const input = {
      hostname: 'www.bugfix.es',
      password: '',
      username: 'username',
    }
    const output = formatUrl(input)

    expect(output).toBe('//username@www.bugfix.es/')
  })

  test('correctly formats special characters in a username and password', function () {
    const input = {
      hostname: 'www.bugfix.es',
      password: 'p@ssword',
      username: 'us:rname',
    }
    const output = formatUrl(input)

    expect(output).toBe('//us%3Arname:p%40ssword@www.bugfix.es/')
  })

  test('omits the origin part of a URL if the hostname is missing', function () {
    const input = {
      password: 'password',
      port: '4433',
      protocol: 'https',
      username: 'username',
    }
    const output = formatUrl(input)

    expect(output).toBe('/')
  })

  test('correctly formats the pathname part of a URL', function () {
    const input = { pathname: 'foobar' }
    const output = formatUrl(input)

    expect(output).toBe('/foobar')
  })

  test('correctly formats a URL with hostname and pathname', function () {
    const input = {
      hostname: 'www.bugfix.es',
      pathname: 'foobar',
    }
    const output = formatUrl(input)

    expect(output).toBe('//www.bugfix.es/foobar')
  })

  test('correctly formats the search part of a URL', function () {
    const input = { searchParams: { foo: 'bar' } }
    const output = formatUrl(input)

    expect(output).toBe('/?foo=bar')
  })

  test('omits the search part of a URL if the search parameters are empty', function () {
    const input = { searchParams: { } }
    const output = formatUrl(input)

    expect(output).toBe('/')
  })

  test('correctly formats the hash part of a URL', function () {
    const input = { hash: 'foobar' }
    const output = formatUrl(input)

    expect(output).toBe('/#foobar')
  })

  test('correctly formats the hash part of a URL with special characters', function () {
    const input = { hash: 'foob@r' }
    const output = formatUrl(input)

    expect(output).toBe('/#foob%40r')
  })

  test('omits the hash part of a URL if the hash is empty', function () {
    const input = { hash: '' }
    const output = formatUrl(input)

    expect(output).toBe('/')
  })

  test('correctly formats a URL with all parts', function () {
    const input = {
      hash: 'foobar',
      hostname: 'www.bugfix.es',
      password: 'password',
      pathname: 'foobar',
      port: '8000',
      protocol: 'http',
      searchParams: { foo: 'bar' },
      username: 'username',
    }
    const output = formatUrl(input)

    expect(output).toBe('http://username:password@www.bugfix.es:8000/foobar?foo=bar#foobar')
  })
})
