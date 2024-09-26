import { methodC } from './c'

type MethodA = () => void

export const methodA: MethodA = () => {
  methodC()
}
