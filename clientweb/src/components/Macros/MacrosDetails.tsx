import React, { ReactElement } from 'react';
import { Grid, Typography, Paper, IconButton } from '@material-ui/core';
import DailyMealPlan from '../Dashboard/DailyMealPlan';
import DashboardDate from '../Dashboard/DashboardDate';
import MacrosConsumed from './MacrosConsumed';
import MacrosRemaining from './MacrosRemaining';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('xs')]: {
      padding: theme.spacing(1)
    }
  },
  arrow: {
    position: 'absolute',
    right: '2rem',
    top: '13rem',
    visibility: 'hidden',
    [theme.breakpoints.down('sm')]: {
      visibility: 'visible'
    }
  },
  consumed: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

interface Props {}

export default function MacrosDetails({}: Props): ReactElement {
  const [hidden, setHidden] = React.useState(true);
  const classes = useStyles();
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setHidden(!hidden);
  };
  return (
    <>
      <DashboardDate />
      <Paper className={classes.root}>
        {/* <IconButton
          className={classes.arrow}
          onClick={handleClick}
          component={hidden ? KeyboardArrowDown : KeyboardArrowUp}
        >
          {/* {hidden ? <KeyboardArrowDown /> : <KeyboardArrowUp />} */}
        {/* </IconButton> */}
        <Grid container xs={12} spacing={2}>
          <Grid item xs={12} md={6}>
            <MacrosRemaining />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={`${hidden ? `${classes.consumed}` : ''}`}
          >
            <MacrosConsumed />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
