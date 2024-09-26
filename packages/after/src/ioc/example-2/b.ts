import type { A } from './a'

export interface B {
  method(): void
}

export const B = (a: A): B => ({
  method() {
    console.log('called b')
    a.method()
  },
})
