import { Db, User } from '../db'
import { v4 as uuid } from 'uuid'

declare function isValidEmail(email: string): boolean
declare function isUUID(id: string): boolean
declare class UserServiceError extends Error {}

export class UserService {
  constructor(private readonly db: Db) {}

  getUsers = async (ids: string[]) => {
    return this.db.users.find(ids)
  }

  getUserById = async (id: string) => {
    return this.db.users.get(id)
  }

  createUser = async (payload: Omit<User, 'id'>) => {
    const user = { id: uuid(), ...payload }
    this.assertUserIsValid(user)
    return this.db.users.insert(user)
  }

  updateUser = async ({ id, ...user }: User) => {
    return this.db.users.update(id, user)
  }

  deleteUser = async (id: string) => {
    return this.db.users.delete(id)
  }

  private assertUserIsValid(user: User): asserts user is User {
    const { id, name, age, email } = user

    if (age < 13) {
      throw new UserServiceError('User is too young to sign up')
    }

    if (name.length > 30) {
      throw new UserServiceError('Name too long')
    }

    if (!isValidEmail(email)) {
      throw new UserServiceError('Invalid email')
    }

    if (!isUUID(id)) {
      throw new UserServiceError('Invalid id')
    }
  }
}
