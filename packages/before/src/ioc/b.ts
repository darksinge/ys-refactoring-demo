import { methodA } from './a'

type MethodB = () => void

export const methodB: MethodB = () => {
  methodA()
}
