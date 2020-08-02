import React, { ReactElement } from 'react';
import { Grid, Button } from '@material-ui/core';
import { MealPreview } from '../../models/meals';
import MealPreviewCard from './MealPreviewCard';
interface Props {
  meals: MealPreview[];
}

export default function MealPreviews({ meals }: Props): ReactElement {
  return (
    <Grid>
      <Grid spacing={2} container justify="space-between">
        {meals.map((meal) => (
          <MealPreviewCard key={meal.id} meal={meal} />
        ))}
      </Grid>
      <Button fullWidth>Load More</Button>
    </Grid>
  );
}
