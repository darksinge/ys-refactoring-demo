# `packages/before/src/services/`

This directory has two example modules: `user.service.ts`
and `admin.service.ts`. The modules use the same pattern
that we see in non-refactored services within the
certifications service.

The pattern takes the following form:

```typescript
// myService.ts
import * as otherService from '~/path/to/other/service'

export const someFunction = () => {
  const someValue = otherService.doSomething()
  // do something with `someValue`...
}
```

Notice the direction of dependencies. The dependency
`otherService` is directly imported into `myService.ts`. We
might say the module `myService.ts` _owns_ the reference to
`otherService`. There's nothing inherently wrong with this
pattern, but it introduces some potential problems due to
the tight coupling between dependencies and dependents.

IoC (Inversion of Control) is a pattern used to reduce
coupling between dependencies (among other things).
The idea is to _reverse the direction of dependencies_.
The way we do this is through DI (dependency injection).

The core concept of DI is extremely simple: pass
dependencies in through arguments to a constructor.

```typescript
// myService.ts
type OtherService = typeof import('~/path/to/other/service')

export const someFunction = (otherService: OtherService) => {
  const someValue = otherService.doSomething()
  // ...
}
```

In the above snippet, `otherService` is "injected" into
`someFunction` as a dependency by passing it in as an
argument. The dependency still exists, but the reference to
`otherService` is no longer _owned_ by the module
`myService.ts`. Notice how this _reverses_ the direction of
the dependency. `myService.ts` must be provided an instance
of `otherService`; it no longer maintains the reference.

---

Look at `user.service.ts` and `admin.service.ts`. They
should seem pretty familiar. Afterward, go to
`packages/after/services/` to see how the two services can
be refactored to take advantage of IoC.
