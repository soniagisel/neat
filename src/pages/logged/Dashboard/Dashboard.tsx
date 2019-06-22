import * as React from 'react'
import { DashboardProps } from './types'
import ActionButtons from './ActionButtons'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import classnames from 'classnames'

const Dashboard: React.SFC<DashboardProps> = () => {
  const userName = 'Sonia'
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography
        variant='h4'
        component='h4'
        className={classnames(classes.fontKrub, classes.paddingBottom)}
      >
        Welcome, {userName}
      </Typography>
      <Typography
        variant='caption'
        component='h6'
        className={classes.fontRockSalt}
      >
        What would you like to do?
      </Typography>
      <h4>Si hay, mostrar las proximas 3 Upcoming Tasks </h4>
      <ActionButtons />
    </React.Fragment>
  )
}

export default Dashboard
