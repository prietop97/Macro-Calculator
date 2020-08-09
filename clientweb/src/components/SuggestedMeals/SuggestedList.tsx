import React, { ReactElement, useEffect, useContext, useState } from 'react';
import { Grid, Typography, Button, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RootStoreContext } from '../../stores/rootStore';
import MealPreviewCard from '../../common/MealPreviewCard';
import { observer } from 'mobx-react-lite';
interface Props {}

function SuggestedList({}: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { suggestedMeals } = rootStore.mealPlanStore;
  const useStyles = makeStyles((theme) => ({
    submit: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '11px 0 11px 0',
      width: '335px',
      margin: '1rem auto',
      alignSelf: 'center'
    }
  }));
  const classes = useStyles();
  return (
    <Paper>
      <Grid container justify="center">
        <Typography
          variant="button"
          component="h3"
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            justifySelf: 'center',
            padding: '0.5rem 0'
          }}
        >
          Suggested Meals
        </Typography>
        <Grid container spacing={2} justify="space-around">
          {suggestedMeals &&
            suggestedMeals
              .filter((x, i) => i < 6)
              .map((meal) => <MealPreviewCard key={meal.id} meal={meal} />)}
        </Grid>
        <Button
          type="submit"
          //   fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          See More
        </Button>
      </Grid>
    </Paper>
  );
}

export default observer(SuggestedList);
