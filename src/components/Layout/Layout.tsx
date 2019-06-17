import * as React from 'react'
import { Box, CssBaseline } from '@material-ui/core'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'
import { LayoutProps } from './types'
import Header from './Header'
import theme from './theme'

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={createMuiTheme(theme)}>
      <CssBaseline />
      <Header />
      <Box>{children}</Box>
    </ThemeProvider>
  )
}

export default Layout
