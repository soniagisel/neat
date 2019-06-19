import React from 'react'
import MaterialTable from 'material-table'
import { UsersTableProps } from './types'

const UsersTable: React.SFC<UsersTableProps> = ({ users }) => {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear' },
      {
        title: 'Birth Place',
        field: 'birthCity'
      }
    ],
    data: users
  })

  return (
    <MaterialTable
      title='Users'
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              const data = [...state.data]
              data.push(newData)
              setState({ ...state, data })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              const data = [...state.data]
              data[data.indexOf(oldData)] = newData
              setState({ ...state, data })
            }, 600)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              const data = [...state.data]
              data.splice(data.indexOf(oldData), 1)
              setState({ ...state, data })
            }, 600)
          })
      }}
    />
  )
}

export default UsersTable
