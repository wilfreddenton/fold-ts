import { Foldable, Reduce } from '../src/index'

type Root<A> = Empty | Leaf<A> | Node<A>

export default class Tree<A> implements Foldable<A> {
  root: Root<A>

  constructor(root: Root<A> = { tag: 'EMPTY' }) {
    this.root = root
  }

  reduce: Reduce<A> = (step, init) => {
    const node = this.root
    switch (node.tag) {
      case 'NODE':
        return node.left.reduce(step, step(node.right.reduce(step, init), node.value))
      case 'LEAF':
        return step(init, node.value)
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
