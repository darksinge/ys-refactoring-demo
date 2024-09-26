# `packages/after/src/ioc/example-2/`

In `./example-1/`, the code was refactored to use DI.
However, it was pretty annoying to pass in dependencies via
arguments. The code in this directory follows the more
common approach of capturing dependencies during object
creation, then using a reference to dependencies.

The pattern looks like the following (and, notice how
**all** of the below examples are valid implementations of
DI):

```typescript
const getBar = () => 'bar'

// "naive" approach
const foo = (dep: () => string) => {
  const bar = dep()
  return `foo${bar}`
}
console.log(foo(getBar)) // prints "foobar"

// function/closure-based approach
const makeFoo = (dep: () => string) => {
  return () => `foo${dep()}`
}
const foo = makeFoo(getBar)
console.log(foo()) // prints "foobar"

// class-based approach
class Foo {
  constructor(private dep: () => string) {}

  call() {
    return `foo${this.dep()}`
  }
}
const foo = new Foo(getBar)
console.log(foo.call()) // prints "foobar"
```
