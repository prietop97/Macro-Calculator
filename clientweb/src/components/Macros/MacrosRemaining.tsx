import React, { ReactElement, useContext } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MacrosChart from './MacrosChart';
import { Observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';
import { useTheme } from '@material-ui/core/styles';
import { observer } from 'mobx-react-lite';

interface Props {}
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '16px'
  },
  text: {
    fontSize: '1.3rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem'
    }
  }
}));

function MacrosRemaining({}: Props): ReactElement {
  const theme = useTheme();
  const classes = useStyles();
  const rootStore = useContext(RootStoreContext);
  const { dailyMealPlan, consumed } = rootStore.mealPlanStore;
  console.log(dailyMealPlan);
  const checkForNegative = (num: number) => {
    if (num > 0) return num;
    return 0;
  };
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
    >
      <Grid item xs={12} sm={6}>
        <Typography component="h3" variant="button" className={classes.text}>
          Macros Remaining
        </Typography>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={3}>
          <MacrosChart
            color={theme.palette.primary.main}
            total={dailyMealPlan?.carbsGrams! - consumed.carbsGrams}
            consumed={consumed.carbsGrams}
          />
          <Typography component="h2" variant="button" align="center">
            Carbs
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <MacrosChart
            color={theme.palette.secondary.main}
            total={dailyMealPlan?.proteinGrams}
            consumed={consumed.proteinGrams}
          />
          <Typography component="h2" variant="button" align="center">
            Protein
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <MacrosChart
            color={theme.palette.warning.main}
            total={dailyMealPlan?.fatGrams}
            consumed={consumed.fatGrams}
          />
          <Typography component="h2" variant="button" align="center">
            Fat
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <MacrosChart
            color={theme.palette.success.main}
            total={checkForNegative(
              dailyMealPlan?.calories! - consumed.calories
            )}
            consumed={consumed.calories}
          />
          <Typography component="h2" variant="button" align="center">
            Calories
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default observer(MacrosRemaining);
