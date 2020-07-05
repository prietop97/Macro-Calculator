import React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  withStyles
} from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import { StepIconProps } from '@material-ui/core/StepIcon';

const ColorlibConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 22
  },
  active: {
    '& $line': {
      backgroundImage: `linear-gradient( 95deg,${theme.palette.primary.light} 0%,${theme.palette.primary.main} 50%,${theme.palette.primary.dark} 100%)`
    }
  },
  completed: {
    '& $line': {
      backgroundImage: `linear-gradient( 95deg,${theme.palette.primary.light} 0%,${theme.palette.primary.main} 50%,${theme.palette.primary.dark} 100%)`
    }
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1
  }
}))(StepConnector);

const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  active: {
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)'
  },
  completed: {
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 50%, ${theme.palette.primary.dark} 100%)`
  }
}));

function ColorlibStepIcon(props: StepIconProps) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

interface Props {
  steps: string[];
  activeStep: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    }
  })
);

export default function CustomizedSteppers({ steps, activeStep }: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
