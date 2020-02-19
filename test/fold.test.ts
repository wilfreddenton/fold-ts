import { fold, all, sum, nub } from '../src/index'
import Tree from './tree'

const testArray = [1, 2, 2, 3]

const testTree = new Tree<number>({
  tag: 'NODE',
  left: new Tree({
    tag: 'NODE',
    left: new Tree({
      tag: 'LEAF',
      value: 3,
    }),
    value: 2,
    right: new Tree({
      tag: 'EMPTY',
    }),
  }),
  value: 2,
  right: new Tree({
    tag: 'LEAF',
    value: 1,
  }),
})

test.each([testArray, testTree])('sum', async (fa) => {
  expect(fold(sum, fa)).toBe(8)
})

test.each([testArray, testTree])('any', async (fa) => {
  expect(
    fold(
      all((a) => a > 0),
      fa,
    ),
  ).toBe(true)
  expect(
    fold(
      all((a) => a < 0),
      fa,
    ),
  ).toBe(false)
})

test.each([testArray, testTree])('nub', async (fa) => {
  expect(fold(nub(), fa)).toStrictEqual([1, 2, 3])
})
