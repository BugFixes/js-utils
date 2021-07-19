import {
  extend,
} from '../src'

describe('extend()', function () {
  test('merges any number of given objects into a target object', function () {
    const target = {
      test: true,
    }
    const objA = {
      testA: true,
    }
    const objB = {
      testB: true,
    }
    const objC = {
      testC: true,
    }
    const objD = {
      testD: true,
    }
    const objE = {
      testE: true,
    }

    extend(target, objA, objB, objC, objD, objE)

    expect(target).toEqual({
      ...target,
      ...objA,
      ...objB,
      ...objC,
      ...objD,
      ...objE,
    })
  })

  test('returns the modified target object', function () {
    const target = {
      test: true,
    }
    const objA = {
      testA: true,
    }
    const result = extend(target, objA)

    expect(result).toBe(target)
  })

  test('maintains the original property descriptors', function () {
    const target = {
      internalTargetVal: undefined,
      get targetVal(): any {
        return this.internalTargetVal
      },
      set targetVal(val) {
        this.internalTargetVal = val
      },
    }
    const objA = {
      get testVal() {
        return true
      },
    }
    const result = extend(target, objA)

    expect(
      Object.getOwnPropertyDescriptor(result, 'targetVal'),
    ).toEqual(
      Object.getOwnPropertyDescriptor(target, 'targetVal'),
    )
    expect(
      Object.getOwnPropertyDescriptor(result, 'testVal'),
    ).toEqual(
      Object.getOwnPropertyDescriptor(objA, 'testVal'),
    )
  })
})
