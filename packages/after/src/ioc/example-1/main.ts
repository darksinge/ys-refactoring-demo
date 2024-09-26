import * as A from './a'
import * as C from './c'

/**
 * TODO: The problems in this file can't be addressed until
 * the issues in `./c.ts` have been fixed. Once `./c.ts` has
 * been refactored, the typescript errors in this file
 * should surface.
 *
 * NOTE: It's not obvious that a circular dependency exists
 * between `a.ts`, `b.ts`, and `c.ts`, until we try
 * composing the three functions together. As soon as we do,
 * Typescript quickly shows we can't invoke any one of the
 * functions without one of the other two. The only way to
 * resolve this issue is to address the underlying circular
 * dependency.
 *
 * Also note that this infinite loop exists in the "before"
 * code, but the problem doesn't surface until runtime. By
 * explicitly specifying dependencies, we can catch the
 * issue early using static analysis.
 */
A.methodA(C)
