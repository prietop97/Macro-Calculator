import React, { ReactElement, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  Button
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

interface Props {}

export default function MainNavbar({}: Props): ReactElement {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container md={12} justify="space-around" alignItems="center">
          <Grid item md={4}>
            <Typography variant="button" component="h2">
              MACRO CALCULATOR
            </Typography>
          </Grid>
          <Grid container item md={6} justify="flex-end">
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Progression</Button>
            <Button color="inherit">Meals</Button>
            <Button color="inherit">Meal Plans</Button>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={'primary-search-account-menu'}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
