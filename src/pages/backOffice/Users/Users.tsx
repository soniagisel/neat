import * as React from 'react'
import { UsersProps } from './types'
import Typography from '@material-ui/core/Typography'
import UsersTable from '../../../components/Layout/UsersTable'
import useStyles from './styles'

const Users: React.SFC<UsersProps> = () => {
  const classes = useStyles()
  const users = [
    { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
    {
      name: 'Zerya Betül',
      surname: 'Baran',
      birthYear: 2017,
      birthCity: 34
    }
  ]

  return (
    <React.Fragment>
      <Typography
        component='h1'
        variant='h5'
        color='inherit'
        classes={{
          root: classes.title
        }}
      >
        Admin Panel
      </Typography>
      <UsersTable users={users} />
    </React.Fragment>
  )
}

export default Users
