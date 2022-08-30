import { cloneArr } from '../../src/utils/clone.utils'

describe('Testing cloning utilities:', () => {
  const arr = [1, 2, 3]
  test('cloneArr', () => {
    expect(cloneArr(arr)).toStrictEqual(arr)
  })
})
