# `packages/before/src/ioc/`

Within this directory, the three files (`a.ts`, `b.ts`, and
`c.ts`) contain a circular dependency.

- `a.ts` depends on `c.ts`
- `b.ts` depends on `a.ts`
- `c.ts` depends on `a.ts`

The circular dependency is obscurred due to the dependencies
being imported in the top-level/global scope of each module.

```bash
❯ tsx main.ts
refactoring-demo/packages/before/src/ioc/c.ts:6
  methodB()
  ^

RangeError: Maximum call stack size exceeded
    at methodC (refactoring-demo/packages/before/src/ioc/c.ts:6:3)
    at methodA (refactoring-demo/packages/before/src/ioc/a.ts:6:3)
    at methodB (refactoring-demo/packages/before/src/ioc/b.ts:6:3)
    at methodC (refactoring-demo/packages/before/src/ioc/c.ts:6:3)
    at methodA (refactoring-demo/packages/before/src/ioc/a.ts:6:3)
    at methodB (refactoring-demo/packages/before/src/ioc/b.ts:6:3)
    at methodC (refactoring-demo/packages/before/src/ioc/c.ts:6:3)
    at methodA (refactoring-demo/packages/before/src/ioc/a.ts:6:3)
    at methodB (refactoring-demo/packages/before/src/ioc/b.ts:6:3)
    at methodC (refactoring-demo/packages/before/src/ioc/c.ts:6:3)
```

The basic form of a circular dependency looks like the
following:

```typescript
// foo.ts
import { bar }

export const foo = () => `foo${bar()}`

// bar.ts
import { foo } from './foo'

export const bar = () => 'bar'
```
