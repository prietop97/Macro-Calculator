import React, { ReactElement } from 'react';
import { Grid, Typography, IconButton } from '@material-ui/core';
import DateFnsUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import moment from 'moment';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Today
} from '@material-ui/icons';

interface Props {}

export default function DashboardDate({}: Props): ReactElement {
  const datePicker = React.useRef(null);
  const [selectedDate, setSelectedDate] = React.useState<MaterialUiPickersDate>(
    () => {
      const today = new Date();
      return moment(
        `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
      );
    }
  );
  const [date, setDate] = React.useState<string | undefined>('Today');
  const [open, setOpen] = React.useState(false);
  const changeDate = (newDate: MaterialUiPickersDate) => {
    setSelectedDate(newDate);
  };
  const openDatePicker = (
    event: React.MouseEvent<HTMLHeadingElement, MouseEvent>
  ) => {
    setOpen(true);
  };
  React.useEffect(() => {
    const today = new Date();
    const difference = moment(
      `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    ).diff(selectedDate, 'days');
    switch (difference) {
      case 1:
        setDate('Yesterday');
        break;
      case -1:
        setDate('Tomorrow');
        break;
      case 0:
        setDate('Today');
        break;
      default:
        setDate(selectedDate?.format('LLLL').split(',')[0]);
    }
  }, [selectedDate, setSelectedDate]);
  const substractDay = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setSelectedDate(moment(selectedDate).subtract(1, 'day'));
  };
  const addDay = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setSelectedDate(moment(selectedDate).add(1, 'day'));
  };
  const goToToday = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const today = new Date();
    const todayM = moment(
      `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`
    );
    setSelectedDate(moment(todayM));
  };
  return (
    <Grid container xs={12}>
      <Grid item container xs={12} alignItems="center" justify="center">
        <Grid item xs={6} container direction="row">
          <Grid item xs={12}>
            <Typography variant="h3" component="h3">
              {date}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Typography onClick={openDatePicker} variant="h4" component="h3">
                {selectedDate?.format('LL')}
              </Typography>
              <DatePicker
                open={open}
                value={selectedDate}
                onChange={changeDate}
                onClose={() => setOpen(false)}
                style={{ visibility: 'hidden' }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid item container xs={6} justify="flex-end">
          <Grid item>
            <IconButton>
              <KeyboardArrowLeft onClick={substractDay} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <Today onClick={goToToday} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton>
              <KeyboardArrowRight onClick={addDay} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
