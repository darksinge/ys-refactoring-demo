import { db, User } from './db'

await db.connect()

export const getUsers = async (ids: string[]) => {
  return db.users.find(ids)
}

export const getUserById = async (id: string) => {
  return db.users.get(id)
}

export const createUser = async (user: Omit<User, 'id'>) => {
  return db.users.insert(user)
}

export const updateUser = async ({ id, ...user }: User) => {
  return db.users.update(id, user)
}

export const deleteUser = async (id: string) => {
  return db.users.delete(id)
}
