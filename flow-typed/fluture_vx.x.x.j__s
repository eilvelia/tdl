declare module 'fluture' {
  // import type { λ } from '@'

  declare export type Cancel = () => void

  declare export class Fluture</*::+*/Resolve, /*::+*/Reject> {
    // +typeclass: typeof Fluture,
    map<-T>(fn: (data: Resolve) => T): Fluture<T, Reject>,
    bimap<T, F>(left: (err: Reject) => F, right: (data: Resolve) => T): Fluture<T, F>,
    chain<T, F>(fn:
      (data: Resolve) => Fluture<T, F>
    ): Fluture<T, Reject | F>,
    swap(): Fluture<Reject, Resolve>,
    mapRej<F>(fn: (err: Reject) => F): Fluture<Resolve, F>,
    chainRej<T, F>(fn: (err: Reject) => Fluture<T, F>): Fluture<Resolve | T, F>,
    fork(
      left: (err: Reject) => any,
      right: (data: Resolve) => any
    ): Cancel,
    promise(): Promise<Resolve>,

    or<T, F>(alt: Fluture<T, F>): Fluture<Resolve | T, Reject | F>,
    and<T, F>(alt: Fluture<T, F>): Fluture<T, Reject | F>,
    race<T, F>(futureB: Fluture<T, F>): Fluture<Resolve | T, Reject | F>,
    both<T, F>(futureB: Fluture<T, F>): Fluture<[Resolve, T], Reject | F>,
    fold<T, F>(
      left: (val: Reject) => F,
      right: (val: Resolve) => T
    ): Fluture<T | F, void>,
    value(): Resolve,
    lastly<T, F>(futureB: Fluture<T, F>): Fluture<Resolve, Reject | F>,
    /*::
    static $call: typeof FutureF
    */
  }

  // declare export opaque type λFluture<A, B>: λ<typeof Fluture, A, B>

  declare type Go = <-Resolve, Reject, +Return>(
    gen: Generator<Fluture<Resolve, Reject>, Resolve, Return>
  ) => Fluture<Return, Reject>

  declare export var go: Go

  declare export function fold<IL, IR, OL, OR>(
    left: (val: IL) => OL,
    right: (val: IR) => OR,
    future: Fluture<IR, IL>
  ): Fluture<OR & OL, void>

  declare export function chain<IR, OR, OL>(
    fn: (x: IR) => Fluture<OR, OL>
  ): (
    <IL>(future: Fluture<IR, IL>) => Fluture<OR, IL | OL>
  )

  declare function FutureF<Resolve, Reject>(fn: (rj: (err: Reject) => void, rs: (data: Resolve) => void) => ((() => void) | void)): Fluture<Resolve, Reject>
  declare export var Future: typeof Fluture
  declare export function encaseP3<A, B, C, Resolve>(fn:(a: A, b: B, c: C) => Promise<Resolve>): (a: A, b: B, c: C) => Fluture<Resolve, mixed>


  declare export function encase3<A, B, C, Resolve>(fn:(a: A, b: B, c: C) => Resolve): (a: A) => (b: B) => (b: B) => Fluture<Resolve, mixed>


  declare export function encaseP<A, T, /*::+*/F>(fn:(a: A) => Promise<T>, noa: void): (a: A) => Fluture<T, F>
  declare export function encaseP<A, T, /*::+*/F>(fn:(a: A) => Promise<T>, a: A): Fluture<T, F>

  declare export type FutureFabric1</*::-*/A, T, F> = (x: A) => Fluture<T, F>
  declare export type FutureFabric2C1</*::-*/A, /*::-*/B, T, F> = (a: A) => FutureFabric1<B, T, F>
  declare export type FutureFabric2C2</*::-*/A, /*::-*/B, T, F> = (a: A, b: B) => Fluture<T, F>

  declare export type Encased2<
  /*::+*/A,
  /*::+*/B,
  /*::+*/T,
  /*::+*/F/*::,
  +Fab: (
    & FutureFabric2C1<A, B, T, F>
    & FutureFabric2C2<A, B, T, F>
  ) = (
    & FutureFabric2C1<A, B, T, F>
    & FutureFabric2C2<A, B, T, F>
  )*/> /*:: = Fab;
  declare type Nop1<A, B, T, F> */ = FutureFabric2C1<A, B, T, F> & FutureFabric2C2<A, B, T, F>

  declare export function encaseP2<A, B, T, /*::+*/F>(fn: (a: A, b: B) => Promise<T>, noa: void, nob: void): Encased2<A, B, T, F>
  declare export function encaseP2<A, B, T, /*::+*/F>(fn: (a: A, b: B) => Promise<T>, a: A, noa: void): (b: B) => Fluture<T, F>
  declare export function encaseP2<A, B, T, /*::+*/F>(fn: (a: A, b: B) => Promise<T>, a: A, b: B): Fluture<T, F>


  declare export function encase2<A, B, T, /*::+*/F>(fn: (a: A, b: B) => T, noa: void, nob: void): (
    | ((a: A, noc: void) => (b: B) => Fluture<T, F>)
    | ((a: A, b: B) => Fluture<T, F>)
  )
  declare export function encase2<A, B, T, /*::+*/F>(fn: (a: A, b: B) => T, a: A, noa: void): (b: B) => Fluture<T, F>
  declare export function encase2<A, B, T, /*::+*/F>(fn: (a: A, b: B) => T, a: A, b: B): Fluture<T, F>


  declare export function encase<I, O, /*::+*/F>(fn:(x: I) => O, noa: void): (x: I) => Fluture<O, F>
  declare export function encase<I, O, /*::+*/F>(fn:(x: I) => O, x: I): Fluture<O, F>

  declare export function attempt<T, /*::+*/F>(fn: () => T): Fluture<T, F>
  declare export function tryP<T, /*::+*/F>(fn: () => Promise<T>): Fluture<T, F>

  declare export function reject</*::+*/T, F>(error: F): Fluture<T, F>
  declare export function resolve<T, /*::+*/F>(value: T): Fluture<T, F>

  declare export function after<T, /*::+*/F>(time: number, value: T): Fluture<T, F>
  declare export function rejectAfter</*::+*/T, F>(time: number, value: F): Fluture<T, F>

  declare export function both<TA, FA, TB, FB>(futureA: Fluture<TA, FA>, noa: void): (futureB: Fluture<TB, FB>) => Fluture<[TA, TB], FA | FB>
  declare export function both<TA, FA, TB, FB>(futureA: Fluture<TA, FA>, futureB: Fluture<TB, FB>): Fluture<[TA, TB], FA | FB>
  declare export function or<TA, FA, TB, FB>(futureA: Fluture<TA, FA>, futureB: Fluture<TB, FB>): Fluture<TA | TB, FA | FB>

  declare export function and</*::-*/TA, FA, TB, FB>(futureA: Fluture<TA, FA>, noa: void): (
    (futureB: Fluture<TB, FB>) => Fluture<TB, FA | FB>
  )
  declare export function and</*::-*/TA, FA, TB, FB>(futureA: Fluture<TA, FA>, futureB: Fluture<TB, FB>): Fluture<TB, FA | FB>

  declare export function ap<I, O, FA, FB>(
    futureFn: Fluture<((x: I) => O), FA>,
    noa: void
  ): ((futureArg: Fluture<I, FB>) => Fluture<O, FA | FB>)
  declare export function ap<I, O, FA, FB>(
    futureFn: Fluture<((x: I) => O), FA>,
    futureArg: Fluture<I, FB>
  ): Fluture<O, FA | FB>

  declare export function bimap<TA, FA, TB, FB>(
    left: (x: FA) => FB,
    noa: void,
    nob: void
  ): (
    | ((right: (x: TA) => TB, noc: void) =>
        (future: Fluture<TA, FA>) => Fluture<TB, FB>)
    | ((right: (x: TA) => TB, future: Fluture<TA, FA>) => Fluture<TB, FB>)
  )
  declare export function bimap<TA, FA, TB, FB>(
    left: (x: FA) => FB,
    right: (x: TA) => TB,
    noa: void
  ): (future: Fluture<TA, FA>) => Fluture<TB, FB>
  declare export function bimap<TA, FA, TB, FB>(
    left: (x: FA) => FB,
    right: (x: TA) => TB,
    future: Fluture<TA, FA>
  ): Fluture<TB, FB>

  declare export function map<I, O, Reject>(fn: (x: I) => O, noa: void): (future: Fluture<I, Reject>) => Fluture<O, Reject>
  declare export function map<I, O, Reject>(fn: (x: I) => O, future: Fluture<I, Reject>): Fluture<O, Reject>

  declare export function mapRej<I, O, Resolve>(fn: (x: I) => O, noa: void): (future: Fluture<Resolve, I>) => Fluture<Resolve, O>
  declare export function mapRej<I, O, Resolve>(fn: (x: I) => O, future: Fluture<Resolve, I>): Fluture<Resolve, O>

  declare export function race<TA, FA, TB, FB>(
    futureA: Fluture<TA, FA>,
    noa: void
  ): ((futureB: Fluture<TB, FB>) => Fluture<TA | TB, FA | FB>)
  declare export function race<TA, FA, TB, FB>(
    futureA: Fluture<TA, FA>,
    futureB: Fluture<TB, FB>
  ): Fluture<TA | TB, FA | FB>

  declare export function promise<T, /*::-*/F>(future: Fluture<T, F>): Promise<T>

  declare export function cache<Resolve, Reject>(future: Fluture<Resolve, Reject>): Fluture<Resolve, Reject>
  declare export function isFuture(value: mixed): boolean /*:: %checks ( value instanceof Fluture ) */
  declare export function never</*::+*/Resolve, /*::+*/Reject>(): Fluture<Resolve, Reject>
  declare type Mapping</*::-*/I, O, Reject> = (result: I) => Fluture<O, Reject>
  declare type MapInferResult</*::-*/I, Reject> = <O>(result: I) => Fluture<O, Reject>

  declare export function hook<T, F, FDispose, FConsume, Next>(
    acquire: Fluture<T, F>,
    noa: void,
    nob: void
  ): (
    | ((dispose: MapInferResult<T, FDispose>, noc: void) =>
        (consume: Mapping<T, Next, FConsume>) => Fluture<Next, F | FDispose | FConsume>)
    | ((dispose: MapInferResult<T, FDispose>, consume: Mapping<T, Next, FConsume>) => Fluture<Next, F | FDispose | FConsume>)
  )
  declare export function hook<T, F, FDispose, FConsume, Next>(
    acquire: Fluture<T, F>,
    dispose: MapInferResult<T, FDispose>,
    noa: void
  ): (consume: Mapping<T, Next, FConsume>) => Fluture<Next, F | FDispose | FConsume>
  declare export function hook<T, F, FDispose, FConsume, Next>(
    acquire: Fluture<T, F>,
    dispose: MapInferResult<T, FDispose>,
    consume: Mapping<T, Next, FConsume>
  ): Fluture<Next, F | FDispose | FConsume>


  declare export function fork<T, F>(
    left: (x: F) => any,
    noa: void,
    nob: void
  ): (
    | ((right: (x: T) => any, noc: void) =>
        (future: Fluture<T, F>) => Cancel)
    | ((right: (x: T) => any, future: Fluture<T, F>) => Cancel)
  )
  declare export function fork<T, F>(
    left: (x: F) => any,
    right: (x: T) => any,
    noa: void
  ): (future: Fluture<T, F>) => Cancel
  declare export function fork<T, F>(
    left: (x: F) => any,
    right: (x: T) => any,
    future: Fluture<T, F>
  ): Cancel

  declare export function of<T, /*::+*/F>(value: T): Fluture<T, F>
}
