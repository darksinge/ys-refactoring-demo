import { Db, User } from '../db'
import { v4 as uuid } from 'uuid'

declare function isValidEmail(email: string): boolean
declare function isUUID(id: string): boolean
declare class UserServiceError extends Error {}

function assertUserIsValid(user: User): asserts user is User {
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

export const UserService = (db: Db) => {
  return {
    async getUsers(ids: string[]) {
      return db.users.find(ids)
    },

    async getUserById(id: string) {
      return db.users.get(id)
    },

    async createUser(payload: Omit<User, 'id'>) {
      const user = { id: uuid(), ...payload }
      assertUserIsValid(user)
      return db.users.insert(user)
    },

    async updateUser({ id, ...user }: User) {
      return db.users.update(id, user)
    },

    async deleteUser(id: string) {
      return db.users.delete(id)
    },
  }
}
