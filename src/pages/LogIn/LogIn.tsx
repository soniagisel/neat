import React from 'react'
import { LogInProps } from './types'
import { Box, Typography, TextField, Button } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import useStyles from './styles'
import classnames from 'classnames'

const LogIn: React.SFC<LogInProps> = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState<LogInProps>({
    name: ''
  })

  const handleChange = (name: keyof LogInProps) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <Box>
      <Typography
        variant='h5'
        className={classnames(
          classes.alignCenter,
          classes.paddingBottom,
          classes.fontKrub
        )}
      >
        Let's start getting things Neat
      </Typography>
      <form
        className={classnames(classes.container)}
        noValidate
        autoComplete='off'
      >
        <TextField
          id='standard-name'
          label='Type your name'
          className={classnames(
            classes.textField,
            classes.marginAuto,
            classes.paddingBottom
          )}
          value={values.name}
          onChange={handleChange('name')}
          margin='normal'
        />
      </form>
      <Box display='flex' justifyContent='center'>
        <Button
          variant='contained'
          color='primary'
          className={classes.width15rem}
        >
          log in
        </Button>
      </Box>
    </Box>
  )
}

export default LogIn
