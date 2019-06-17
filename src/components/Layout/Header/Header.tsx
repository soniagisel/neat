import * as React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'

import { HeaderProps } from './types'
import useStyles from './styles'
import clsx from 'clsx'
import { Menu as MenuIcon } from '@material-ui/icons'
import DrawerMenu from '../DrawerMenu'

const Header: React.SFC<HeaderProps> = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  return (
    <Box className={classes.root}>
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='Open drawer'
            onClick={() => setOpen(!open)}
            edge='start'
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap>
            Neat
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerMenu open={open} handleDrawerToggle={handleDrawerToggle} />
    </Box>
  )
}

export default Header
