import React, { ReactElement, useContext } from 'react';
import {
  Grid,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';

function RegistrationUserGoals(): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { goalId, changeGoal } = rootStore.userStatsFormStore;
  return (
    <>
      <Grid container xs={12} spacing={1}>
        <Grid item xs={12}>
          <Typography component="h5" variant="button">
            What Is Your Goal?
          </Typography>
          <RadioGroup
            value={goalId}
            onChange={changeGoal}
            aria-label="Goal"
            name="goalId"
          >
            <FormControlLabel
              checked={goalId === 1}
              label="Loose Weight"
              control={<Radio color="primary" />}
              value={1}
              name="goalId"
            />
            <FormControlLabel
              checked={goalId === 2}
              label="Maintain Weight"
              control={<Radio color="primary" />}
              value={2}
              name="goalId"
            />
            <FormControlLabel
              checked={goalId === 3}
              label="Gain Weight"
              control={<Radio color="primary" />}
              value={3}
              name="goalId"
            />
          </RadioGroup>
        </Grid>
      </Grid>
    </>
  );
}
export default observer(RegistrationUserGoals);
