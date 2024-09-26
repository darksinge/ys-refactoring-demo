import { B } from './b'

export interface C {
  method(): void
}

export const C = (b: B): C => ({
  method() {
    console.log('called c')
    b.method()
  },
})
