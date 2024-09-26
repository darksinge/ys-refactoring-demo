/**
 * NOTE: This module has been refactored from
 * `packages/before/ioc/a.ts` to use DI (dependency
 * injection) via passing in its dependencies as arguments.
 *
 * This uses the principle of IoC (inversion of control).
 */

type MethodA = (c: typeof import('./c')) => void

export const methodA: MethodA = (c) => {
  c.methodC()
}
