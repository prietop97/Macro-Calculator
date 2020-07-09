import { createMuiTheme } from '@material-ui/core/styles';
import { blue, purple, green, red } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: purple,
    success: green,
    warning: red
  }
});
