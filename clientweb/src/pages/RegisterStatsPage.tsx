import React, { useContext, ReactElement, ChangeEvent } from 'react';
import { UserStatsFormPost } from '../models/user';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core/';
import Stepper from '../components/Registration/RegistrationStepper';
import { RootStoreContext } from '../stores/rootStore';
import { useHistory } from 'react-router-dom';
import RegistrationStatsForm from '../components/Registration/RegistrationStatsForm';
import StepperButtons from '../components/Registration/StepperButtons';

function getSteps(): string[] {
  return ['Credentials', 'Statistics', 'Goals'];
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  paper: {
    padding: theme.spacing(5),
    borderRadius: '40px 0 40px 0'
  }
}));

export default function RegisterStatsPage(): ReactElement {
  const history = useHistory();
  const rootStore = useContext(RootStoreContext);
  const { postUserStats } = rootStore.userStatsStore;
  const [userStatsValues, setUserStatsValues] = React.useState<
    UserStatsFormPost
  >({
    genderId: 0,
    dateOfBirth: new Date('2014-08-18T21:11:54'),
    height: 0,
    weight: 175,
    activityFactorId: 0,
    goalId: 0,
    unitSystemId: 1
  });
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name.endsWith('Id')) {
      setUserStatsValues({
        ...userStatsValues,
        [e.target.name]: +e.target.value
      });
    } else {
      setUserStatsValues({
        ...userStatsValues,
        [e.target.name]: e.target.value
      });
    }
  };
  const handleHeight = (height: number): void => {
    setUserStatsValues({ ...userStatsValues, height: height });
  };
  const handleWeight = (
    e: ChangeEvent<{}>,
    weight: number | number[]
  ): void => {
    setUserStatsValues({ ...userStatsValues, weight: weight });
  };

  const steps = getSteps();

  const handleNext = async (): Promise<void> => {
    if (activeStep === 2) {
      await postUserStats(userStatsValues);
      history.push('/Dashboard');
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = (): void => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
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
          <Stepper steps={steps} activeStep={activeStep} />
          <form noValidate>
            <RegistrationStatsForm
              activeStep={activeStep}
              handleHeight={handleHeight}
              handleWeight={handleWeight}
              userStatsValues={userStatsValues}
              handleChange={handleChange}
            />
            <StepperButtons
              steps={steps}
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
            />
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
