/**
 * FIXME: This module contains the original code from
 * `packages/before/ioc/c.ts`, but it's broken after
 * refactoring `./a.ts` and `./b.ts`. Try refactoring the
 * original code using dependency injection.
 *
 * NOTE: It's still possible to make the errors go away
 * through globally scoped imports, but circular
 * dependencies quickly become obvious when using dependency
 * injection.
 *
 * TODO: After demonstrating this code can't be refactored
 * without fixing the circular dependency when using DI, try
 * using globally scoped imports to make the typescript
 * errors go away. Run the code. You should get a "Maximum
 * call stack exceeded" error.
 */
import { methodB } from './b'

export const methodC = (/* TODO: Try injecting the dependency here */) => {
  methodB(/* This expects two arguments */)
}
