import type { A } from './a'

export interface B {
  call(): void
}

export const B = (a: A): B => ({
  call() {
    console.log('called b')
    a.call()
  },
})
