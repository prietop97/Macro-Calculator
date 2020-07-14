import React from 'react';
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme
} from '@material-ui/core/styles';
import CircularProgress, {
  CircularProgressProps
} from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';
interface Props {
  color: string;
  value: number | undefined;
}

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
      background: theme.palette.grey[theme.palette.type === 'light' ? 300 : 700]
    },
    colorPrimary: {
      background: theme.palette.grey[theme.palette.type === 'light' ? 300 : 700]
    },
    bar: (props: Props) => ({
      borderRadius: 5,
      backgroundColor: props.color
    })
  })
)(LinearProgress);

export default function CustomizedProgressBars({ color, value }: Props) {
  return <BorderLinearProgress variant="determinate" value={0} color={color} />;
}
