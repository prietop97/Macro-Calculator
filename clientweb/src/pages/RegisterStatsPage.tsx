import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core/';
import Stepper from '../components/Registration/RegistrationStepper';
import RegistrationStatsForm from '../components/Registration/RegistrationStatsForm';
import StepperButtons from '../components/Registration/StepperButtons';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `linear-gradient( 95deg,${theme.palette.primary.dark} 0%,${theme.palette.primary.dark} 50%,${theme.palette.primary.dark} 100%)`
  },
  paper: {
    padding: theme.spacing(5),
    borderRadius: '40px 0 40px 0',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  }
}));

export default function RegisterStatsPage(): ReactElement {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      xs={12}
      container
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h2" align="center">
            Macro App
          </Typography>
          <Typography component="h1" variant="h5" align="center">
            SIGN UP
          </Typography>
          <Stepper />
          <form noValidate>
            <RegistrationStatsForm />
            <StepperButtons />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
