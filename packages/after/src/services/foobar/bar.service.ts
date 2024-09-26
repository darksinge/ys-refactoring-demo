import { FooService } from './foo.service'

export class BarService {
  constructor(private readonly fooService: FooService) {}

  toString() {
    return `${this.fooService}bar`
  }
}
