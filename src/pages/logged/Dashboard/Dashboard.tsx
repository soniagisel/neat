import * as React from 'react'
import { DashboardProps } from './types'
import ActionButtons from './ActionButtons'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import classnames from 'classnames'
import UpcomingTasks from '../../../components/Layout/UpcomingTasks/UpcomingTasks'

const Dashboard: React.SFC<DashboardProps> = () => {
  const userName = 'Sonia'
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography
        variant='h4'
        component='h4'
        className={classnames(classes.fontKrub)}
      >
        Welcome, {userName}
      </Typography>
      <Typography
        variant='caption'
        component='h6'
        className={classnames(classes.fontRockSalt, classes.paddingBottom)}
      >
        What would you like to do?
      </Typography>
      <UpcomingTasks />
      <ActionButtons />
    </React.Fragment>
  )
}

export default Dashboard
