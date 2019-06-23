import React from 'react'
import { UpcomingTasksProps } from './types'
import useStyles from './styles'
import { Box } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import Typography from '@material-ui/core/Typography'

const UpcomingTasks: React.SFC<UpcomingTasksProps> = () => {
  const classes = useStyles()

  return (
    <Box>
      <Typography variant='h5' component='h5'>
        Upcoming Tasks
      </Typography>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Edit photos for instagram'
            secondary='Jul 9, 2019'
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Send email to the client'
            secondary='Jul 27, 2019'
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Call the hotel to make a reservation'
            secondary='Nov 20, 2019'
          />
        </ListItem>
      </List>
    </Box>
  )
}

export default UpcomingTasks
