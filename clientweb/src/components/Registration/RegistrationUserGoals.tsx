import React, { ReactElement, ChangeEvent } from 'react';
import { UserStatsFormPost } from '../../models/user';
import {
  Grid,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  userStatsValues: UserStatsFormPost;
}

export default function RegistrationUserGoals({
  handleChange,
  userStatsValues
}: Props): ReactElement {
  console.log(userStatsValues);
  return (
    <Grid container xs={12} spacing={1}>
      <Grid item xs={6}>
        <Typography component="h5" variant="button">
          What Is Your Goal?
        </Typography>
        <RadioGroup
          value={userStatsValues.goalId}
          onChange={handleChange}
          aria-label="Goal"
          name="goalId"
        >
          <FormControlLabel
            checked={userStatsValues.goalId === 1}
            label="Loose Weight"
            control={<Radio color="primary" />}
            value={1}
            name="goalId"
          />
          <FormControlLabel
            checked={userStatsValues.goalId === 2}
            label="Maintain Weight"
            control={<Radio color="primary" />}
            value={2}
            name="goalId"
          />
          <FormControlLabel
            checked={userStatsValues.goalId === 3}
            label="Gain Weight"
            control={<Radio color="primary" />}
            value={3}
            name="goalId"
          />
        </RadioGroup>
      </Grid>
    </Grid>
  );
}
