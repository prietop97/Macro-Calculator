import React, { ReactElement, useState, useEffect, ChangeEvent } from 'react';
import {
  Typography,
  RadioGroup,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  Slider,
  FormControl,
  FormLabel
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { UserStatsFormPost } from '../../models/user';

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleHeight: (height: number) => void;
  userStatsValues: UserStatsFormPost;
}
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

export default function RegistrationUserStats({
  handleChange,
  handleHeight,
  userStatsValues
}: Props): ReactElement {
  const [height, setHeight] = useState<{ feets: number; inches: number }>({
    feets: 0,
    inches: 0
  });
  const changeHeight = (e: ChangeEvent<HTMLInputElement>): void => {
    setHeight({ ...height, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const totalHeight = height.feets * 12 + height.inches;
    handleHeight(totalHeight);
  }, [height]);

  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel>Gender: </FormLabel>
            <RadioGroup
              value={userStatsValues.genderId}
              onChange={handleChange}
              aria-label="gender"
              name="genderId"
              
            >
              <Grid xs={12} container justify="space-between">
                <Grid item xs={6}>
                  <FormControlLabel
                    checked={userStatsValues.genderId == 1}
                    label="Male"
                    control={<Radio />}
                    value={1}
                    name="genderId"
                  />
                </Grid>
                <Grid item xs={6}>
                  <FormControlLabel
                    checked={userStatsValues.genderId == 2}
                    label="Female"
                    control={<Radio />}
                    value={2}
                    name="genderId"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Typography component="h5" variant="button">
        Weight (Pounds):
      </Typography>

      <PrettoSlider
        valueLabelDisplay="on"
        aria-label="pretto slider"
        defaultValue={175}
        step={5}
        min={50}
        max={300}
      />
      <Grid xs={12}>
        <Grid xs={12}>
          <Grid xs={6}>
            <Typography component="h5" variant="button">
              Height:
            </Typography>
          </Grid>
          <Grid xs={11}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="feets"
              label="Feets"
              type="number"
              id="feets"
              autoComplete="Feets"
              onChange={handleChange}
              value={height.inches}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="inches"
              label="Inches"
              name="inches"
              autoComplete="Inches"
              autoFocus
              type="number"
              onChange={handleChange}
              value={height.feets}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
