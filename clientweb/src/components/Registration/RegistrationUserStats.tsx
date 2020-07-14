import React, { ReactElement, useContext } from 'react';
import {
  Typography,
  RadioGroup,
  Grid,
  TextField,
  FormControlLabel,
  Radio,
  Slider,
  Theme
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DatePicker from '../../common/DatePicker';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';

const PrettoSlider = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.main,
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
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
}))(Slider);

function RegistrationUserStats(): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const {
    genderId,
    changeGender,
    weight,
    changeWeight,
    feets,
    changeFeets,
    inches,
    changeInches
  } = rootStore.userStatsFormStore;

  return (
    <>
      <Grid container xs={12} direction="column" spacing={2}>
        <Grid item xs={12}>
          <Typography component="h5" variant="button">
            Gender:
          </Typography>
          <RadioGroup
            value={genderId}
            onChange={changeGender}
            aria-label="gender"
            name="genderId"
          >
            <Grid xs={12} container justify="space-around">
              <FormControlLabel
                checked={genderId === 1}
                label="Male"
                control={<Radio color="primary" />}
                value={1}
                name="genderId"
              />
              <FormControlLabel
                checked={genderId === 2}
                label="Female"
                control={<Radio color="primary" />}
                value={2}
                name="genderId"
              />
            </Grid>
          </RadioGroup>
        </Grid>
        <Grid item xs={12}>
          <Typography component="h5" variant="button">
            Weight (Pounds):
          </Typography>

          <PrettoSlider
            valueLabelDisplay="on"
            aria-label="pretto slider"
            defaultValue={weight}
            value={weight}
            onChange={changeWeight}
            name="weight"
            step={5}
            min={50}
            max={300}
          />
        </Grid>
        <Grid item container xs={6} spacing={1} sm={12}>
          <Grid item sm={6} xs={12} container>
            <Grid item>
              <Typography component="h5" variant="button">
                Height:
              </Typography>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  placeholder="5"
                  name="feets"
                  label="Feets"
                  type="number"
                  id="feets"
                  autoComplete="Feets"
                  onChange={changeFeets}
                  value={feets}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  margin="normal"
                  id="inches"
                  placeholder="7"
                  label="Inches"
                  name="inches"
                  autoComplete="Inches"
                  type="number"
                  onChange={changeInches}
                  value={inches}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} container>
            <Grid item>
              <Typography component="h5" variant="button">
                Birthday:
              </Typography>
            </Grid>
            <Grid item container xs={12} spacing={1}>
              <DatePicker />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default observer(RegistrationUserStats);
