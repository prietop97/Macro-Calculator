import React, { ReactElement } from 'react';
import { Link, Typography } from '@material-ui/core/';

export default function Copyright(): ReactElement {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Macro App
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
