import { methodB } from './b'

type MethodC = () => void

export const methodC: MethodC = () => {
  methodB()
}
