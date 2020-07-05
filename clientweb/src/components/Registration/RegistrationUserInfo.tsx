import React, { ReactElement, ChangeEvent } from 'react';
import { Grid, TextField } from '@material-ui/core';
import { UserFormValues } from '../../models/user';

interface Props {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  userInfo: UserFormValues;
}

export default function RegistrationUserInfo({
  handleChange,
  userInfo
}: Props): ReactElement {
  return (
    <>
      <Grid xs={12} container>
        <Grid item container xs={12} spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="First Name"
              autoFocus
              onChange={handleChange}
              value={userInfo.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              name="lastName"
              fullWidth
              label="Last Name"
              type="input"
              id="lastName"
              autoComplete="Last Name"
              onChange={handleChange}
              value={userInfo.lastName}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={handleChange}
          value={userInfo.email}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="input"
          id="password"
          autoComplete="password"
          onChange={handleChange}
          value={userInfo.password}
        />
      </Grid>
    </>
  );
}
