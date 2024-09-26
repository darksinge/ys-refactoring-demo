import { getFooString } from './foo.service'

export const getBarString = () => `${getFooString}bar`
