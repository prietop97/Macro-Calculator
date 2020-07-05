import React, {
  useContext,
  ReactElement,
  useState,
  ChangeEvent,
  FormEvent
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  TextField,
  Avatar,
  Button
} from '@material-ui/core/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../common/Copyright';
import { RootStoreContext } from '../stores/rootStore';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: `url(${'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80'})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(20, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.primary.main,
    borderRadius: '0 15px 0 15px',
    padding: '0.8rem 0'
  }
}));

export default function RegisterPage(): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { register } = rootStore.userStore;
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await register(formState);
    history.push('/statsregistration');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component="h1" variant="h2">
            Macro App
          </Typography>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            SIGN UP
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
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
                    value={formState.firstName}
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
                    value={formState.lastName}
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
                value={formState.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                onChange={handleChange}
                value={formState.password}
              />
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              SIGN UP
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Terms And Conditions
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {'Already have an account? Login'}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <Grid item container xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
