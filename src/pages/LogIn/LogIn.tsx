import React from 'react'
import { LogInProps } from './types'
import { Box, Typography, TextField, Button } from '@material-ui/core'
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
        variant='h4'
        className={classnames(
          classes.alignCenter,
          classes.paddingBottom,
          classes.fontKrub
        )}
      >
        Log In
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
      <Button variant='contained' color='secondary' fullWidth>
        Secondary
      </Button>
    </Box>
  )
}

export default LogIn
