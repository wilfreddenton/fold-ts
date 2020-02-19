type Reduce<A> = <X>(step: (x: X, a: A) => X, init: X) => X

interface Foldable<A> {
  reduce: Reduce<A>
}

type Fold_<X, A, B> = { step: (x: X, a: A) => X; initial: X; extract: (x: X) => B }

type Fold<A, B> = (run: <X>(_: Fold_<X, A, B>) => B) => B

const fold = <A, B>(f: Fold<A, B>, fa: Foldable<A>) =>
  f(({ step, initial, extract }) => extract(fa.reduce(step, initial)))

const id = <B>(b: B) => b

const sum: Fold<number, number> = (run) =>
  run({
    step: (x, a) => x + a,
    initial: 0,
    extract: id,
  })

const all = <A>(p: (a: A) => boolean): Fold<A, boolean> => (run) =>
  run({
    step: (x, a) => x && p(a),
    initial: true,
    extract: id,
  })

const nub = <A>(): Fold<A, A[]> => (run) =>
  run({
    step: (x, a) => x.add(a),
    initial: new Set<A>(),
    extract: (x) => [...x],
  })

export { Reduce, Foldable, Fold, fold, all, sum, nub }
