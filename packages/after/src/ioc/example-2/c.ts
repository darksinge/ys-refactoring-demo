import { B } from './b'

export interface C {
  call(): void
}

export const C = (b: B): C => ({
  call() {
    console.log('called c')
    b.call()
  },
})
