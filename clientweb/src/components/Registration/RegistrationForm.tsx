import React, { useState, ReactElement, ChangeEvent, useContext } from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import {
  TextField,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Slider,
  Typography
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { RootStoreContext } from '../../stores/rootStore';
import RegistrationUserInfo from './RegistrationUserInfo';
import RegistrationUserStats from './RegistrationUserStats';

interface Props {
  activeStep: number;
}

export default function RegistrationForm({ activeStep }: Props): ReactElement {
  // const rootStore = useContext(RootStoreContext);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [userStatsValues, setUserStatsValues] = React.useState({
    genderId: 0,
    dateOfBirth: new Date('2014-08-18T21:11:54'),
    height: 0,
    weight: 0,
    activityFactorId: 0,
    goalId: 0,
    unitSystemId: 1
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.name);
    setUserStatsValues({ ...userStatsValues, [e.target.name]: e.target.value });
  };
  const handleHeight = (height: number): void => {
    setUserStatsValues({ ...userStatsValues, height: height });
  };

  // const handleDateChange = (date: Date) => {
  //   setUserStatsValues({ ...userStatsValues, dateOfBirth: date });
  // };
  // const classes = useStyles();

  switch (activeStep) {
    case 0:
      return (
        <RegistrationUserInfo handleChange={handleChange} userInfo={userInfo} />
      );
    case 1:
      return (
        <RegistrationUserStats
          handleChange={handleSecondChange}
          userStatsValues={userStatsValues}
          handleHeight={handleHeight}
        />
      );
    default:
      return <></>;
  }
}
