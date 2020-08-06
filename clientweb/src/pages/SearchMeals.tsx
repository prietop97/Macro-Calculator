import React, { ReactElement, useState, useEffect, useContext } from 'react';
import { Grid, Container } from '@material-ui/core';
import MainNavbar from '../components/Navigation/MainNavbar';
import Recipes from '../api/spoonacularAgent';
import { MealPreview } from '../models/meals';
import MealPreviews from '../components/SearchMeals/MealPreviews';
import { RootStoreContext } from '../stores/rootStore';
interface Props {}

export default function SearchMeals({}: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const {
    dailyMealPlan,
    getSuggestedMeals,
    suggestedMeals,
    suggestedLoading
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

  if (suggestedLoading) return <div>Loading...</div>;
  return (
    <Grid>
      <MainNavbar />
      <Container>
        <MealPreviews meals={suggestedMeals || []} />
      </Container>
    </Grid>
  );
}
