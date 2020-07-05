import React, { ReactElement, useState } from 'react';
import DateFnsUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

export default function DatePicker(): ReactElement {
  const [
    selectedDate,
    setSelectedDate
  ] = useState<MaterialUiPickersDate | null>(null);

  const handleDateChange = (date: MaterialUiPickersDate | null): void => {
    console.log(selectedDate?.toDate());
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        views={['month', 'date', 'year']}
        placeholder="01/01/2000"
        margin="normal"
        id="date-picker-dialog"
        inputVariant="outlined"
        fullWidth
        label="Date Of Birth"
        format="MM/DD/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date'
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
