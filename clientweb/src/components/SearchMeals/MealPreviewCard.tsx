import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { MealPreview } from '../../models/meals';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //   maxWidth: 345,
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%'
    },
    heading: {
      height: '20%'
    },
    cta: {
      height: '10%'
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);
interface Props {
  meal: MealPreview;
}
export default function MealPreviewCard({ meal }: Props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} container>
      <Card className={classes.root}>
        <CardHeader title={meal.title} className={classes.heading} />
        <CardMedia
          className={classes.media}
          image={meal.image}
          title={meal.title}
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            Carbs: {meal.carbs}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Fat: {meal.fat}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Protein: {meal.protein}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Total Calories: {meal.calories}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cta}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
