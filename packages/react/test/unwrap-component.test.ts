import type * as React from 'react'
import {
  unwrapComponent,
} from '../src'

describe('unwrapComponent()', function () {
  function BaseComponent(): null {
    return null
  }

  function withWrap<P>(Component: React.ComponentType<P>): ()=> null { // eslint-disable-line @typescript-eslint/naming-convention
    function Wrap(): null {
      return null
    }

    Wrap.WrappedComponent = Component

    return Wrap
  }

  test('returns a component that is wrapped', function () {
    const wrapped = withWrap(BaseComponent)

    expect(unwrapComponent(wrapped)).toBe(BaseComponent)
  })

  test('returns a component that is wrapped multiple levels deep', function () {
    const wrapped = withWrap(withWrap(withWrap(BaseComponent)))

    expect(unwrapComponent(wrapped)).toBe(BaseComponent)
  })

  test('returns a component that is not wrapped', function () {
    expect(unwrapComponent(BaseComponent)).toBe(BaseComponent)
  })
})
