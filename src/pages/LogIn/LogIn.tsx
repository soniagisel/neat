import React from 'react'
import { LogInProps } from './types'
import { Box, Typography } from '@material-ui/core'

const LogIn: React.SFC<LogInProps> = () => {
  return (
    <Box>
      <Typography variant='h4'>Log In</Typography>
    </Box>
  )
}

export default LogIn
