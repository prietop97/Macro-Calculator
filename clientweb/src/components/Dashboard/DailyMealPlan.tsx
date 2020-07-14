import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import DailyMeal from './DailyMeal';
import { aMeal } from './data';

interface Props {}

export default function DailyMealPlan({}: Props): ReactElement {
  return (
    <Grid container justify="space-between" alignItems="center">
      <Grid item xs={12} md={6} lg={2}>
        <DailyMeal title="Breakfast" meal={aMeal} />
      </Grid>
      <Grid item xs={12} md={6} lg={2}>
        <DailyMeal title="Snack" />
      </Grid>
      <Grid item xs={12} md={4} lg={2}>
        <DailyMeal title="Lunch" />
      </Grid>
      <Grid item xs={12} md={4} lg={2}>
        <DailyMeal title="Snack" />
      </Grid>
      <Grid item xs={12} md={4} lg={2}>
        <DailyMeal title="Dinner" />
      </Grid>
    </Grid>
  );
}
