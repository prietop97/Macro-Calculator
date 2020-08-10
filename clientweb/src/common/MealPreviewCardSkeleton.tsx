import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  Grid,
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography
} from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { red } from '@material-ui/core/colors';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    veryRoot: {
      maxWidth: 345
    },
    root: {
      height: '400px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%'
    },
    heading: {
      height: '15%',
      fontSize: '0.5rem',
      display: 'flex',
      alignItems: 'center'
    },
    cta: {
      height: '10%'
    },
    media: {
      height: 0,
      paddingTop: '56.25%' // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
      })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    },
    avatar: {
      backgroundColor: red[500]
    }
  })
);
interface Props {}
function MealPreviewCardSkeleton({}: Props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} container className={classes.veryRoot}>
      <Card className={classes.root}>
        <Grid className={classes.heading}>
          <Skeleton width={'75%'} height="15px" />
        </Grid>
        <Skeleton width={'100%'} height={'275px'} />
        <CardContent>
          <Skeleton width={'40%'} />
          <Skeleton width={'30%'} />
          <Skeleton width={'50%'} />
          <Skeleton width={'50%'} />
          <Skeleton width={'70%'} />
        </CardContent>
        <CardActions disableSpacing className={classes.cta}>
          <Skeleton width="90%" height="50px" />
        </CardActions>
      </Card>
    </Grid>
  );
}

export default observer(MealPreviewCardSkeleton);
