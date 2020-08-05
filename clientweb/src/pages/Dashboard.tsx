import React, { ReactElement, useContext, EffectCallback } from 'react';
import MacrosDetails from '../components/Macros/MacrosDetails';
import MainNavbar from '../components/Navigation/MainNavbar';
import DailyMealPlan from '../components/Dashboard/DailyMealPlan';
import { Grid, Container, Box } from '@material-ui/core';
import { RootStoreContext } from '../stores/rootStore';
import { observer } from 'mobx-react-lite';
import { history } from '../index';
interface Props {}

function Dashboard({}: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { getUserStats } = rootStore.userStatsStore;
  const { getDailyMealPlan, activeDate } = rootStore.mealPlanStore;

  React.useEffect((): void => {
    getUserStats();
    getDailyMealPlan(activeDate);
  }, [getUserStats]);

  return (
    <Grid>
      <MainNavbar />
      <Container>
        <MacrosDetails />
        <Box m={2} />
        <DailyMealPlan />
      </Container>
    </Grid>
  );
}
export default observer(Dashboard);
