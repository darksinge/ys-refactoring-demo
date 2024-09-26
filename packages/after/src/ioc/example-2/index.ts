import { A } from './a'
import { C } from './c'
import { B } from './b'

// Typescript catches the circular dependency. Even though it's not obvious
// that a circular dependency was being created from within a.ts, b.ts, and
// c.ts, once we try composing the three functions together, Typescript quickly
// shows we can't create an instance of any object without the other two.
export default () => A(C(B(A(/* ... */))))
