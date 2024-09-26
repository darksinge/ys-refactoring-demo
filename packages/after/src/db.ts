export interface Collection<T extends { id: string }> {
  get: (id: string) => Promise<T>
  find: (ids: string[]) => Promise<T[]>
  insert: (value: Omit<T, 'id'>) => Promise<T>
  update: (id: string, value: Partial<Omit<T, 'id'>>) => Promise<void>
  delete: (id: string) => Promise<void>
}

export interface User {
  id: string
  email: string
  name: string
  age: number
  role?: 'staff' | 'admin'
}

export interface Db {
  users: Collection<User>
  connect: () => Promise<void>
}

declare const db: Db
export { db }
