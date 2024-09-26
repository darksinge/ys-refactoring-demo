import type { C } from './c'

export interface A {
  call(): void
}

export const A = (c: C): A => ({
  call() {
    console.log('called a')
    c.call()
  },
})
