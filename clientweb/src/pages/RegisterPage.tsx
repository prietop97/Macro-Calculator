import React, { useContext, ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  CssBaseline
} from '@material-ui/core/';
import Copyright from '../common/Copyright';
import { RootStoreContext } from '../stores/rootStore';
import { useHistory } from 'react-router-dom';
import Stepper from '../components/Registration/RegistrationStepper';
import StepperButtons from '../components/Registration/StepperButtons';
import { UserFormValues, UserStatsFormPost } from '../models/user';
import RegistrationForm from '../components/Registration/RegistrationForm';
import SideComponent from '../components/AuthForms/SideComponent';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(${'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80'})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '0 15px 0 15px',
    padding: '0.8rem 0'
  }
}));

function getSteps(): string[] {
  return ['Credentials', 'Statistics', 'Goals'];
}

export default function RegisterPage(): ReactElement {
  const history = useHistory();
  const rootStore = useContext(RootStoreContext);
  const { register } = rootStore.userStore;

  // const handleSubmit: Promise<void> = async (
  //   userInfo: IUserFormValues,
  //   userStats: IUserStatsFormPost
  // ) => {
  //   await register(userInfo);
  //   history.push('/Dashboard');
  // };

  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  const handleNext = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = (): void => {
  //   setActiveStep(0);
  // };
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2">
            Macro App
          </Typography>
          <Typography component="h1" variant="h5">
            SIGN UP
          </Typography>
          <Stepper steps={steps} activeStep={activeStep} />
          <form className={classes.form} noValidate>
            <RegistrationForm activeStep={activeStep} />
            <StepperButtons
              steps={steps}
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
            />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Terms And Conditions
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Login"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item container xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
