import React, { ReactElement } from 'react';
import { Typography } from '@material-ui/core';

interface Props {
  title: string;
  description: string;
  checked: boolean;
}

export default function ActivityFactorLabel({
  title,
  description,
  checked
}: Props): ReactElement {
  return (
    <>
      <Typography
        variant="body1"
        component="h5"
        color={checked ? 'primary' : 'initial'}
      >
        {title}
      </Typography>
      <Typography variant="caption" component="h5">
        {description}
      </Typography>
    </>
  );
}
