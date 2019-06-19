import * as React from 'react'
import { DashboardProps } from './types'
import ActionButtons from './ActionButtons'

const Dashboard: React.SFC<DashboardProps> = () => {
  const userName = 'Sonia'

  return (
    <React.Fragment>
      <h1>Welcome, {userName}</h1>
      <h3>What would you like to do?</h3>
      <h4>Si hay, mostrar las proximas 3 Upcoming Tasks </h4>
      <ActionButtons />
    </React.Fragment>
  )
}

export default Dashboard
