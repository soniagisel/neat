import * as React from 'react'
import { Box, CssBaseline } from '@material-ui/core'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import { createMuiTheme } from '@material-ui/core/styles'
import { LayoutProps } from './types'
import Header from './Header'

const Layout: React.SFC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider
      theme={createMuiTheme({
        palette: {
          primary: {
            main: '#ffecb3',
            light: '#ffffe5',
            dark: '#cbba83',
            contrastText: '#000000'
          },
          secondary: {
            main: '#ffab91',
            light: '#ffddc1',
            dark: '#c97b63',
            contrastText: '#000000'
          }
        }
      })}
    >
      <CssBaseline />
      <Header />
      <Box>{children}</Box>
    </ThemeProvider>
  )
}

export default Layout
