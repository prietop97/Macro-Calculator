import React, { ReactElement, useContext, useState } from 'react';
import MacrosDetails from '../components/Macros/MacrosDetails';
import MainNavbar from '../components/Navigation/MainNavbar';
import Footer from '../components/Footer/Footer';
import DailyMealPlan from '../components/Dashboard/DailyMealPlan';
import { Grid, Container, Box } from '@material-ui/core';
import { RootStoreContext } from '../stores/rootStore';
import { observer } from 'mobx-react-lite';
import { history } from '../index';
import SuggestedList from '../components/SuggestedMeals/SuggestedList';
import TodayMeals from '../components/Today Meals/TodayMeals';
interface Props {}

function Dashboard({}: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { getUserStats } = rootStore.userStatsStore;
  const {
    getDailyMealPlan,
    activeDate,
    suggestedLoading,
    getSuggestedMeals,
    dailyMealPlan,
    isLoading
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

  React.useEffect((): void => {
    getUserStats();
    getDailyMealPlan(activeDate);
    getSuggestedMeals(queries);
  }, [getUserStats, getDailyMealPlan, getSuggestedMeals, queries, activeDate]);

  return (
    <Grid>
      <MainNavbar />
      <Container>
        <MacrosDetails />
        <Box m={2} />
        {!isLoading && <TodayMeals />}
        <Box m={2} />
        {!suggestedLoading && <SuggestedList />}
      </Container>
      <Footer />
    </Grid>
  );
}
export default observer(Dashboard);
