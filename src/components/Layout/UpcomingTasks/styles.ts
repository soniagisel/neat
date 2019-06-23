import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  paddingBottom: {
    paddingBottom: theme.spacing(5)
  }
}))
