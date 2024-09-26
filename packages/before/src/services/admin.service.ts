/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from '../db'

declare function getSensitiveInfoAboutUser(user: User): Promise<any>
declare function userHasAdminPermissions(role: User['role']): Promise<boolean>
declare function useAuth(): { user: User }
declare function sendEmail(email: string, data: string): Promise<void>
declare class AdminError extends Error {}

import * as userService from './user.service'

export const doSomethingAdminy = async (userId: string) => {
  const auth = useAuth()
  if (!userHasAdminPermissions(auth.user.role)) {
    throw new AdminError('Forbidden')
  }

  const user = await userService.getUserById(userId)
  const data = await getSensitiveInfoAboutUser(user)
  await sendEmail(auth.user.email, JSON.stringify(data))
}
