import React, { ReactElement, useEffect, useContext, useState } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { RootStoreContext } from '../../stores/rootStore';
import MealPreviewCard from '../SearchMeals/MealPreviewCard';
import { observer } from 'mobx-react-lite';
interface Props {}

function SuggestedList({}: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const {
    dailyMealPlan,
    getSuggestedMeals,
    suggestedMeals
  } = rootStore.mealPlanStore;
  const [queries, setQueries] = useState({
    minFat: dailyMealPlan ? dailyMealPlan.fatGrams - 10 : 0,
    maxFat: dailyMealPlan ? dailyMealPlan.fatGrams + 10 : 50,
    minProtein: dailyMealPlan ? dailyMealPlan.proteinGrams - 20 : 0,
    maxProtein: dailyMealPlan ? dailyMealPlan.proteinGrams + 20 : 100,
    minCarbs: dailyMealPlan ? dailyMealPlan.carbsGrams - 20 : 0,
    maxCarbs: dailyMealPlan ? dailyMealPlan.carbsGrams + 20 : 100,
    offset: 0
  });

  useEffect(() => {
    getSuggestedMeals(queries);
  }, []);

  return (
    <Grid>
      <Typography
        variant="button"
        component="h3"
        style={{ fontSize: '1.5rem', textAlign: 'center' }}
      >
        Suggested Meals
      </Typography>
      <Grid container spacing={2} justify="space-between">
        {suggestedMeals &&
          suggestedMeals
            .filter((x, i) => i < 3)
            .map((meal) => <MealPreviewCard key={meal.id} meal={meal} />)}
      </Grid>
      <Button>See More</Button>
    </Grid>
  );
}

export default observer(SuggestedList);
