import type { C } from './c'

export interface A {
  method(): void
}

export const A = (c: C): A => ({
  method() {
    console.log('called a')
    c.method()
  },
})
