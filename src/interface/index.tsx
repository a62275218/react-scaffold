type User = {
  name: string,
  age?: number
} | {}

export interface IGlobalContext {
  theme: string,
  user: User,
  updateContext: (newState: object) => void
}