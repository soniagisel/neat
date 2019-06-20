import * as React from 'react'
import useStyles from './styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Typography from '@material-ui/core/Typography'
import ToDoList from './../../../../images/to-do-list.jpg'
import Coffee from './../../../../images/coffee.jpg'

export default function ButtonBases() {
  const classes = useStyles()
  const images = [
    {
      url: ToDoList,
      title: 'Create New Task',
      width: '40%'
    },
    {
      url: Coffee,
      title: 'Add Sugested Tasks',
      width: '30%'
    }
  ]

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width
          }}
          onClick={() => alert('funca')}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component='span'
              variant='subtitle1'
              color='inherit'
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  )
}
