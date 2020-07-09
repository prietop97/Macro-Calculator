import React from 'react';
import { Paper, Grid, Typography, IconButton } from '@material-ui/core/';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import { Meal } from './data';

interface Props {
  title: string;
  meal?: Meal;
}
const useStyles = makeStyles((theme) => ({
  card: {
    padding: `${theme.spacing(2)}px`
  },
  toggle: {
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      left: '-1000px',
      up: '10000px'
    }
  }
}));
export default function DailyMeal({ title, meal }: Props) {
  const classes = useStyles();
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <Paper onClick={() => setIsOpened(!isOpened)}>
      <Grid container className={classes.card}>
        <Grid item className={classes.toggle}>
          <IconButton>
            {isOpened ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </Grid>
        <Grid item xs={9} container alignItems="center">
          <Typography variant="button" component="h5">
            {title}
          </Typography>
          {meal && (
            <Grid item xs={12}>
              <Typography variant="caption" component="p">
                {meal.title}
              </Typography>
            </Grid>
          )}
          {meal && (
            <Grid item xs={12}>
              <Typography variant="subtitle1" component="p">
                {`C ${meal.carbsGrams}g P ${meal.proteinGrams}g F ${meal.fatGrams}g Cals ${meal.calories}`}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}
