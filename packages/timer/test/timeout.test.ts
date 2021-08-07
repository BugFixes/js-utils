import {
  timeout,
} from '../src/'

describe('timeout()', function () {
  test('resolves after the given amount of time', async function () {
    const before = Date.now()

    await timeout(200)

    const after = Date.now()
    const delta = after - before

    expect(delta).toBeGreaterThanOrEqual(150)
    expect(delta).toBeLessThanOrEqual(500) // Account for tiny differences in code execution time
  })
})
