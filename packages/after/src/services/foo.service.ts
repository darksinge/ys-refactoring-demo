import { BarService } from './bar.service'

export class FooService {
  constructor(private readonly barService: BarService) {}

  toString() {
    return `foo${this.barService}`
  }
}
