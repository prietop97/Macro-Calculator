import React, { ReactElement } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MacrosProgressBar from './MacrosProgressbar';
import { RootStoreContext } from '../../stores/rootStore';
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

function MacrosConsumed({}: Props): ReactElement {
  const classes = useStyles();
  const theme = useTheme();
  const rootStore = React.useContext(RootStoreContext);
  const { dailyMealPlan, consumed } = rootStore.mealPlanStore;
  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      alignItems="center"
      //   className={classes.root}
    >
      <Grid item xs={12} sm={6}>
        <Typography variant="button" component="h3" className={classes.text}>
          Macros Consumed
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        alignContent="space-around"
        justify="center"
        spacing={1}
        className={classes.root}
      >
        <Grid
          item
          container
          xs={12}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={1}>
            C
          </Grid>
          <Grid item>
            <Typography variant="button" component="p">
              {`${consumed.carbsGrams}g / ${dailyMealPlan?.carbsGrams!}g`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MacrosProgressBar
              valueBuffer={consumed.carbsGrams}
              color={theme.palette.primary.main}
              value={dailyMealPlan?.carbsGrams}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={1}>
            P
          </Grid>
          <Grid item>
            <Typography variant="button" component="p">
              {`${consumed.proteinGrams}g / ${dailyMealPlan?.proteinGrams!}g`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MacrosProgressBar
              valueBuffer={consumed.proteinGrams}
              color={theme.palette.secondary.main}
              value={dailyMealPlan?.proteinGrams}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={1}>
            F
          </Grid>
          <Grid item>
            <Typography variant="button" component="p">
              {`${consumed.fatGrams}g / ${dailyMealPlan?.fatGrams!}g`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MacrosProgressBar
              valueBuffer={consumed.fatGrams}
              color={theme.palette.warning.main}
              value={dailyMealPlan?.fatGrams}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          xs={12}
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={1}>
            Cals
          </Grid>
          <Grid item>
            <Typography variant="button" component="p">
              {`${consumed.calories} / ${dailyMealPlan?.calories!}`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MacrosProgressBar
              valueBuffer={consumed.calories}
              color={theme.palette.success.main}
              value={dailyMealPlan?.calories}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default observer(MacrosConsumed);
