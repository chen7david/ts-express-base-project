import { sum, difference } from '../../src/utils/math.utils'

describe('Testing math utilities:', () => {
  test('sum', () => {
    expect(sum(1, 1)).toBe(2)
  })

  test('difference', () => {
    expect(difference(1, 1)).toBe(0)
  })
})
