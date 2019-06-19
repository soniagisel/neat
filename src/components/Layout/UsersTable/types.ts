interface User {
  name: string
  surname: string
  birthYear: number
  birthCity: number
}

export interface UsersTableProps {
  users: User[]
}
