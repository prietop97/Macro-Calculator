import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { observer } from 'mobx-react-lite';
import { UserMeals } from '../../models/meals';
import { RootStoreContext } from '../../stores/rootStore';

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
  meal: UserMeals;
}
function TodayMeal({ meal }: Props) {
  const classes = useStyles();
  const rootStore = React.useContext(RootStoreContext);
  const { removeMeal } = rootStore.mealPlanStore;
  return (
    <Grid item xs={12} sm={6} md={4} container className={classes.veryRoot}>
      <Card className={classes.root}>
        <CardHeader
          title={meal.meal.title}
          titleTypographyProps={{ variant: 'button', font: '1.2rem' }}
          className={classes.heading}
        />
        <CardMedia
          className={classes.media}
          image={meal.meal.image}
          title={meal.meal.title}
        />
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p">
            Carbs: {meal.meal.carbsGrams}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Fat: {meal.meal.fatGrams}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Protein: {meal.meal.proteinGrams}g
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Total Calories: {meal.meal.calories}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            Quantity: {meal.quantity}
          </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cta}>
          <Button
            fullWidth
            variant="outlined"
            color="primary"
            onClick={() => removeMeal(meal.meal.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default observer(TodayMeal);
