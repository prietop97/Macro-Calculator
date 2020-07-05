import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  url: string;
}

const useStyles = makeStyles((theme) => ({
  image: (props: Props) => ({
    backgroundImage: `url(${props.url})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%'
  })
}));

export default function SideComponent({ url }: Props): ReactElement {
  const classes = useStyles({ url });
  return <Grid item className={classes.image}></Grid>;
}
