import { methodA } from './a'

/**
 * This will throw a "Maximum call stack size exceeded"
 * error. A circular dependency exists, but is hidden by how
 * the dependencies are managed between a.ts, b.ts, and
 * c.ts.
 */
console.log(methodA())
