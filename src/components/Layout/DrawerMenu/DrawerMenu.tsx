import * as React from 'react'
import {
  Box,
  IconButton,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { DrawerMenuProps } from './types'
import useStyles from './styles'
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Inbox as InboxIcon,
  Mail as MailIcon
} from '@material-ui/icons'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom'

const AdapterLink = React.forwardRef<HTMLAnchorElement, RouterLinkProps>(
  (props, ref) => <RouterLink innerRef={ref as any} {...props} />
)

const DrawerMenu: React.SFC<DrawerMenuProps> = ({
  open,
  handleDrawerToggle
}) => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={() => handleDrawerToggle()}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[{ text: 'Dashboard', path: '/dashboard' }].map((element, index) => (
            <ListItem
              button
              key={element.text}
              to={element.path}
              component={AdapterLink}
              onClick={() => handleDrawerToggle()}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={element.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            { text: 'Backoffice', path: '/admin/users' },
            { text: 'Log Out', path: '/' }
          ].map((element, index) => (
            <ListItem
              button
              key={element.text}
              to={element.path}
              component={AdapterLink}
              onClick={() => handleDrawerToggle()}
            >
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={element.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  )
}

export default DrawerMenu
