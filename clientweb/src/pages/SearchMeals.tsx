import React, { ReactElement, useState, useEffect, useContext } from 'react';
import { Grid, Container } from '@material-ui/core';
import MainNavbar from '../components/Navigation/MainNavbar';
import Recipes from '../api/spoonacularAgent';
import { MealPreview } from '../models/meals';
import MealPreviews from '../components/SearchMeals/MealPreviews';
import { RootStoreContext } from '../stores/rootStore';
import { observer } from 'mobx-react-lite';
interface Props {}

function SearchMeals({}: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { search, searchMeals, suggestedLoading } = rootStore.mealPlanStore;
  const [queries, setQueries] = useState({
    minFat: 0,
    maxFat: 30,
    minProtein: 0,
    maxProtein: 50,
    minCarbs: 0,
    maxCarbs: 50,
    offset: 1
  });

  useEffect(() => {
    search(queries);
  }, []);

  if (suggestedLoading) return <div>Loading...</div>;
  return (
    <Grid>
      <MainNavbar />
      <Container>
        <MealPreviews meals={searchMeals || []} />
      </Container>
    </Grid>
  );
}

export default observer(SearchMeals);
