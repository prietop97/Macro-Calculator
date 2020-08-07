import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { MealPreview } from '../models/meals';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../stores/rootStore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    veryRoot: {
      maxWidth: 345
    },
    root: {
      height: '500px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '100%'
    },
    heading: {
      height: '15%',
      fontSize: '0.5rem'
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
function MealPreviewCard({ meal }: Props) {
  console.log(meal.id);
  const classes = useStyles();
  const rootStore = useContext(RootStoreContext);
  const { addMeal } = rootStore.mealPlanStore;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    addMeal(meal);
  };
  return (
    <Grid item xs={12} sm={6} md={4} container className={classes.veryRoot}>
      <Card className={classes.root}>
        <CardHeader
          title={meal.title}
          titleTypographyProps={{ variant: 'button', font: '1.2rem' }}
          className={classes.heading}
        />
        <CardMedia
          className={classes.media}
          image={meal.image}
          title={meal.title}
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            Carbs: {meal.carbsGrams}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Fat: {meal.fatGrams}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Protein: {meal.proteinGrams}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Total Calories: {meal.calories}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cta}>
          <Button
            onClick={handleClick}
            fullWidth
            variant="outlined"
            color="primary"
          >
            Add For Today
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default observer(MealPreviewCard);
