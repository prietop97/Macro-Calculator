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
  const { userStats, calories } = rootStore.userStatsStore;
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
              {`0g / ${userStats?.carbsGrams!}g`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MacrosProgressBar
              color={theme.palette.primary.main}
              value={userStats?.carbsGrams}
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
              {`0g / ${userStats?.proteinGrams!}g`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MacrosProgressBar
              color={theme.palette.secondary.main}
              value={userStats?.proteinGrams}
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
              {`0g / ${userStats?.fatGrams!}g`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MacrosProgressBar
              color={theme.palette.warning.main}
              value={userStats?.fatGrams}
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
              {`0 / ${calories!}`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <MacrosProgressBar
              color={theme.palette.success.main}
              value={calories}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default observer(MacrosConsumed);
