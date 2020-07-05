import React, { ReactElement, ChangeEvent } from 'react';
import {
  Grid,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core';
import { UserStatsFormPost } from '../../models/user';
import {
  DirectionsWalk,
  DirectionsRun,
  DirectionsBike,
  FitnessCenter,
  SportsHandball
} from '@material-ui/icons';
import ActivityFactorLabel from '../ActivityFactor/ActivityFactorLabel';

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  userStatsValues: UserStatsFormPost;
}

export default function RegistrationUserActivityLevel({
  handleChange,
  userStatsValues
}: Props): ReactElement {
  return (
    <Grid item xs={12}>
      <Typography component="h5" variant="button">
        How Active Are You?
      </Typography>
      <RadioGroup
        value={userStatsValues.activityFactorId}
        onChange={handleChange}
        aria-label="activityFactor"
        name="activityFactorId"
      >
        <FormControlLabel
          checked={userStatsValues.activityFactorId === 1}
          label={
            <ActivityFactorLabel
              title="No Activity"
              description="You walk or light jog occasionally for exercise."
              checked={userStatsValues.activityFactorId === 1}
            />
          }
          control={
            <Radio
              checkedIcon={<DirectionsWalk color="primary" />}
              icon={<DirectionsWalk />}
              color="primary"
            />
          }
          value={1}
          name="activityFactorId"
        />
        <FormControlLabel
          label={
            <ActivityFactorLabel
              title="Mild Activity"
              description="You exercive intensively 2-3 times per week for 30-60 minutes."
              checked={userStatsValues.activityFactorId === 2}
            />
          }
          checked={userStatsValues.activityFactorId === 2}
          control={
            <Radio
              checkedIcon={<DirectionsRun color="primary" />}
              icon={<DirectionsRun />}
              color="primary"
            />
          }
          value={2}
          name="activityFactorId"
        />
        <FormControlLabel
          checked={userStatsValues.activityFactorId === 3}
          label={
            <ActivityFactorLabel
              title="Moderate Activity"
              description="You exercive intensively 4-5 times per week for 30-60 minutes."
              checked={userStatsValues.activityFactorId === 3}
            />
          }
          control={
            <Radio
              checkedIcon={<DirectionsBike color="primary" />}
              icon={<DirectionsBike />}
              color="primary"
            />
          }
          value={3}
          name="activityFactorId"
        />
        <FormControlLabel
          checked={userStatsValues.activityFactorId === 4}
          label={
            <ActivityFactorLabel
              title="High Activity"
              description="You exercive intensively 5-7 times per week for 30-60 minutes."
              checked={userStatsValues.activityFactorId === 4}
            />
          }
          control={
            <Radio
              checkedIcon={<SportsHandball color="primary" />}
              icon={<SportsHandball />}
              color="primary"
            />
          }
          value={4}
          name="activityFactorId"
        />
        <FormControlLabel
          checked={userStatsValues.activityFactorId === 5}
          label={
            <ActivityFactorLabel
              title="Extreme Activity"
              description="You exercive intensively multiple times per day 5-7 times per week. You are a professional athlete or someone who trains like one."
              checked={userStatsValues.activityFactorId === 5}
            />
          }
          control={
            <Radio
              checkedIcon={<FitnessCenter color="primary" />}
              icon={<FitnessCenter />}
              color="primary"
            />
          }
          value={5}
          name="activityFactorId"
        />
      </RadioGroup>
    </Grid>
  );
}
