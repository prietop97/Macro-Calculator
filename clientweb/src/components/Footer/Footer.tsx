import React, { ReactElement } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {}

export default function Footer({}: Props): ReactElement {
  const useStyles = makeStyles((theme) => ({
    container: {
      position: 'absolute',
      buttom: 0,
      width: '100%',
      height: '3rem',
      backgroundImage: `linear-gradient( 95deg,${theme.palette.primary.light} 0%,${theme.palette.primary.main} 50%,${theme.palette.primary.dark} 100%)`
    },
    text: {
      color: 'white'
    }
  }));
  const classes = useStyles();
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Typography color="textPrimary" variant="button" component="h3">
        Made By{' '}
        <Link
          className={classes.text}
          color="textSecondary"
          href="https://www.pedroprieto.dev"
        >
          Pedro Prieto
        </Link>
      </Typography>
    </Grid>
  );
}
