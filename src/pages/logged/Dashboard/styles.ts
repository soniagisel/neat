import { makeStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core/styles'
import 'typeface-rock-salt'
import 'typeface-krub'

export default makeStyles((theme: Theme) => ({
  fontRockSalt: {
    fontFamily: 'Rock Salt'
  },
  fontKrub: {
    fontFamily: 'Krub',
    fontWeight: 200
  },
  paddingBottom: {
    paddingBottom: theme.spacing(2)
  }
}))
