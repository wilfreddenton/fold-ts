declare type Reduce<A> = <X>(step: (x: X, a: A) => X, init: X) => X;
interface Foldable<A> {
    reduce: Reduce<A>;
}
declare type Fold_<X, A, B> = {
    step: (x: X, a: A) => X;
    initial: X;
    extract: (x: X) => B;
};
declare type Fold<A, B> = <R>(run: <X>(_: Fold_<X, A, B>) => R) => R;
declare const fold: <A, B>(f: Fold<A, B>, fa: Foldable<A>) => B;
declare const sum: Fold<number, number>;
declare const all: <A>(p: (a: A) => boolean) => Fold<A, boolean>;
declare const nub: <A>() => Fold<A, A[]>;
export { Reduce, Foldable, Fold, fold, all, sum, nub };
