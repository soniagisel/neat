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
      <Button variant='contained' color='secondary'>
        log in
      </Button>
    </Box>
  )
}

export default LogIn
