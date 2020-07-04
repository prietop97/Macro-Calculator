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
import { RootStoreContext } from '../../app/stores/rootStore';

const useStyles = makeStyles((theme: Theme) => ({
  names: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  anotherContainer: {
    display: 'flex'
  },
  inputs: {
    width: '49%'
  },
  radioContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },
  radioInputs: {
    width: '40%'
  },
  papers: {
    marginBottom: '2rem',
    padding: '0 2rem'
  },
  birthday: {
    width: '32%'
  }
}));

const PrettoSlider = withStyles({
  root: {
    color: 'rgb(242,53,87)',
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit'
    }
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)'
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);
interface Props {
  activeStep: number;
}
export default function RegistrationForm({ activeStep }: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const [userStatsValues, setUserStatsValues] = React.useState({
    genderId: 0
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSecondChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    setUserStatsValues({ ...userStatsValues, [e.target.name]: e.target.value });
  };
  const classes = useStyles();

  switch (activeStep) {
    case 0:
      return (
        <>
          <Grid xs={12} className={classes.names}>
            <TextField
              variant="outlined"
              className={classes.inputs}
              margin="normal"
              required
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="First Name"
              autoFocus
              onChange={handleChange}
              value={userInfo.firstName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              className={classes.inputs}
              name="lastName"
              label="Last Name"
              type="input"
              id="lastName"
              autoComplete="Last Name"
              onChange={handleChange}
              value={userInfo.lastName}
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
              value={userInfo.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="input"
              id="password"
              autoComplete="password"
              onChange={handleChange}
              value={userInfo.password}
            />
          </Grid>
        </>
      );
    case 1:
      return (
        <>
          <Typography component="h5" variant="button">
            Gender:
          </Typography>
          <Paper className={classes.papers}>
            <RadioGroup
              value={userStatsValues.genderId}
              onChange={handleSecondChange}
              name="genderId"
            >
              <Grid xs={12} className={classes.radioContainer}>
                <FormControlLabel
                  checked={userStatsValues.genderId == 1}
                  label="Male"
                  control={<Radio />}
                  value={1}
                  name="genderId"
                />
                <FormControlLabel
                  checked={userStatsValues.genderId == 2}
                  label="Female"
                  control={<Radio />}
                  value={2}
                  name="genderId"
                />{' '}
              </Grid>
            </RadioGroup>
          </Paper>

          <Typography component="h5" variant="button">
            Weight (Pounds):
          </Typography>
          <Paper className={classes.papers}>
            <PrettoSlider
              valueLabelDisplay="on"
              aria-label="pretto slider"
              defaultValue={175}
              step={5}
              min={50}
              max={300}
            />
          </Paper>
          <Grid xs={12} className={classes.names}>
            <Grid xs={12}>
              <Grid xs={6}>
                <Typography component="h5" variant="button">
                  Height:
                </Typography>
              </Grid>
              <Grid xs={11} className={classes.names}>
                <TextField
                  variant="outlined"
                  className={classes.inputs}
                  margin="normal"
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={userInfo.firstName}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.inputs}
                  name="lastName"
                  label="Last Name"
                  type="input"
                  id="lastName"
                  autoComplete="Last Name"
                  onChange={handleChange}
                  value={userInfo.lastName}
                />
              </Grid>
            </Grid>
            <Grid>
              <Grid xs={12}>
                <Typography component="h5" variant="button">
                  Birthday:
                </Typography>
              </Grid>
              <Grid xs={12} className={classes.names}>
                <TextField
                  variant="outlined"
                  className={classes.birthday}
                  margin="normal"
                  required
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={userInfo.firstName}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.birthday}
                  name="lastName"
                  label="Last Name"
                  type="input"
                  id="lastName"
                  autoComplete="Last Name"
                  onChange={handleChange}
                  value={userInfo.lastName}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  className={classes.birthday}
                  name="lastName"
                  label="Last Name"
                  type="input"
                  id="lastName"
                  autoComplete="Last Name"
                  onChange={handleChange}
                  value={userInfo.lastName}
                />
              </Grid>
            </Grid>
          </Grid>
        </>
      );
    default:
      return <></>;
  }
}
