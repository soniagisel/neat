import * as React from 'react'
import { UsersProps } from './types'
import UsersTable from '../../../components/Layout/UsersTable'

const Users: React.SFC<UsersProps> = () => {
  return (
    <React.Fragment>
      <h1>This is my Users</h1>
      <UsersTable />
    </React.Fragment>
  )
}

export default Users
