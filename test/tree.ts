import { Foldable, Reduce } from '../src/index'

type Root<A> = Empty | Leaf<A> | Node<A>

export default class Tree<A> implements Foldable<A> {
  root: Root<A>

  constructor(root: Root<A> = { tag: 'EMPTY' }) {
    this.root = root
  }

  reduce: Reduce<A> = (step, init) => {
    const root = this.root
    switch (root.tag) {
      case 'NODE':
        return root.left.reduce(step, step(root.right.reduce(step, init), root.value))
      case 'LEAF':
        return step(init, root.value)
      default:
        // EMPTY
        return init
    }
  }
}

interface Empty {
  tag: 'EMPTY'
}

interface Leaf<A> {
  tag: 'LEAF'
  value: A
}

interface Node<A> {
  tag: 'NODE'
  left: Tree<A>
  value: A
  right: Tree<A>
}
