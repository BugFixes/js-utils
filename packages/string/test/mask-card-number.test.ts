import {
  maskCardNumber,
} from '../src'

describe('maskCardNumber()', function () {
  test('masks a credit card number so only the last 4 digits are visible', function () {
    const input = '6771798025000004'
    const output = maskCardNumber(input)

    expect(output).toBe('**** **** **** 0004')
  })

  test('masks a credit card number with a custom character', function () {
    const input = '6771798025000004'
    const output = maskCardNumber(input, 'X')

    expect(output).toBe('XXXX XXXX XXXX 0004')
  })

  test('masks a credit card number with non digit characters', function () {
    const input = '6771-7980-2500-0004'
    const output = maskCardNumber(input)

    expect(output).toBe('**** **** **** 0004')
  })
})
