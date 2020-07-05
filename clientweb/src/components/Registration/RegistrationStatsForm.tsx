import React, { ReactElement, ChangeEvent } from 'react';
import RegistrationUserActivityLevel from './RegistrationUserActivityLevel';
import RegistrationUserStats from './RegistrationUserStats';
import RegistrationUserGoals from './RegistrationUserGoals';
import { UserStatsFormPost } from '../../models/user';

interface Props {
  activeStep: number;
  userStatsValues: UserStatsFormPost;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleHeight: (num: number) => void;
  handleWeight: (e: ChangeEvent<{}>, weight: number | number[]) => void;
}

export default function RegistrationForm({
  activeStep,
  userStatsValues,
  handleChange,
  handleHeight,
  handleWeight
}: Props): ReactElement {
  switch (activeStep) {
    case 0:
      return (
        <RegistrationUserActivityLevel
          handleChange={handleChange}
          userStatsValues={userStatsValues}
        />
      );
    case 1:
      return (
        <RegistrationUserStats
          handleChange={handleChange}
          userStatsValues={userStatsValues}
          handleHeight={handleHeight}
          handleWeight={handleWeight}
        />
      );
    case 2:
      return (
        <RegistrationUserGoals
          handleChange={handleChange}
          userStatsValues={userStatsValues}
        />
      );
    default:
      return <>ERROR</>;
  }
}
