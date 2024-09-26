/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any */
import { User } from './db'
import { UserService } from './user.service'

declare function getSensitiveInfoAboutUser(user: User): Promise<any>
declare function userHasAdminPermissions(role: User['role']): Promise<boolean>
declare function useAuth(): { user: User }
declare function sendEmail(email: string, data: string): Promise<void>
declare class AdminError extends Error {}

export class AdminService {
  constructor(private readonly userService: UserService) {}

  @IsAdmin
  async doSomethingAdminy(userId: string) {
    const { user: admin } = useAuth()

    const user = await this.userService.getUserById(userId)
    const data = await getSensitiveInfoAboutUser(user)
    await sendEmail(admin.email, JSON.stringify(data))
  }
}

export const IsAdmin: MethodDecorator = (_: Object, __: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
  const fn = descriptor.value
  descriptor.value = function (...args: any[]) {
    const auth = useAuth()
    if (!userHasAdminPermissions(auth.user.role)) {
      throw new AdminError('Forbidden')
    }
    return fn.apply(this, args)
  }
  return descriptor
}
