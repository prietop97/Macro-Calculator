import React, { ReactElement, useEffect, useContext, useState } from 'react';
import { Grid, Typography, Button, Paper } from '@material-ui/core';
import { RootStoreContext } from '../../stores/rootStore';
import TodayMeal from './TodayMeal';
import { observer } from 'mobx-react-lite';
interface Props {}

function SuggestedList({}: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { dailyMealPlan } = rootStore.mealPlanStore;

  return (
    <Paper>
      <Grid>
        <Typography
          variant="button"
          component="h3"
          style={{
            fontSize: '1.5rem',
            textAlign: 'center',
            padding: '0.5rem 0'
          }}
        >
          Daily Meals
        </Typography>
        <Grid container spacing={2} justify="space-around">
          {dailyMealPlan && dailyMealPlan.userMeals.length ? (
            dailyMealPlan.userMeals.map((meal) => <TodayMeal meal={meal} />)
          ) : (
            <Typography
              variant="button"
              component="h3"
              style={{
                fontSize: '1.1rem',
                textAlign: 'center',
                margin: '0.5rem 0'
              }}
            >
              There are no meals added today
            </Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default observer(SuggestedList);
