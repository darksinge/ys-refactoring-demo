/**
 * NOTE: This module has been refactored from
 * `packages/before/ioc/b.ts`. Note that `MethodB` is forced
 * to explicitly list its dependencies due to the approach
 * with DI. Removing a dependency results in a type error.
 */

type MethodB = (
  a: typeof import('./a'), // <- direct dependency
  c: typeof import('./c'), // <- indirect/transient dependency
) => void

export const methodB: MethodB = (a, c) => {
  a.methodA(c)
}
