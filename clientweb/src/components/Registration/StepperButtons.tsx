import React, { ReactElement, useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { RootStoreContext } from '../../stores/rootStore';

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

export default function StepperButtons(): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { activeStep, handleNext, handleBack } = rootStore.userStatsFormStore;
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Button
          variant="outlined"
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
          {activeStep === 2 ? 'Get Macros' : 'Next'}
        </Button>
      </div>
    </div>
  );
}
