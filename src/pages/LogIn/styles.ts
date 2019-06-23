import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'
import 'typeface-krub'

export default makeStyles((theme: Theme) => ({
  alignCenter: {
    textAlign: 'center'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  marginAuto: {
    margin: 'auto'
  },
  paddingBottom: {
    paddingBottom: theme.spacing(5)
  },
  fontKrub: {
    fontFamily: 'Krub',
    fontWeight: 400
  },
  button: {
    margin: theme.spacing(1)
  }
}))
