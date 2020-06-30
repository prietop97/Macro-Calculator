import React, { ReactElement } from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Loader from 'react-loader-spinner';

interface Props {
  steps: string[];
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    button: {
      width: '49%',
      borderRadius: '11px 0 11px 0',
      padding: '0.8rem 0'
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })
);

export default function StepperButtons({
  steps,
  activeStep,
  handleBack,
  handleNext
}: Props): ReactElement {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Button
          disabled={activeStep === 0}
          onClick={handleBack}
          fullWidth
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleNext}
          className={classes.button}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
