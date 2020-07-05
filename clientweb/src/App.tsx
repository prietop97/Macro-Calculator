import React, { useState, FormEvent, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/Homepage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  // const [loginForm] = useState({
  //   email: 'user101@gmail.com',
  //   password: 'Pa$$w0rd'
  // });
  // React.useEffect(() => {
  //   console.log(loginForm);
  // }, []);

  // const [registerForm] = useState({
  //   email: 'user' + Date.now() + '@gmail.com',
  //   username: 'user' + Date.now(),
  //   password: 'Pa$$w0rd'
  // });

  // const [userStat] = useState({
  //   goalId: 1,
  //   activityFactorId: 1,
  //   heightUnitId: 1,
  //   weightUnitId: 1,
  //   genderId: 1,
  //   weight: 140,
  //   height: 68,
  //   dateOfBirth: new Date(1997, 8, 5)
  // });

  // const [response, setResponse] = useState('');
  // const login = (e: MouseEvent) => {
  //   e.preventDefault();
  //   axiosNoAuth()
  //     .post('/users/login', loginForm)
  //     .then((res) => {
  //       console.log('LOGIN');
  //       console.log(res);
  //       setResponse(res.data);
  //       localStorage.setItem('token', res.data.token);
  //     })
  //     .catch((err) => {
  //       console.log('ERROR');
  //     });
  // };

  // const register = (e: MouseEvent) => {
  //   e.preventDefault();
  //   axiosNoAuth()
  //     .post('/users/register', {
  //       ...registerForm,
  //       email: 'user' + Date.now() + '@gmail.com',
  //       username: 'user' + Date.now(),
  //     })
  //     .then((res) => {
  //       console.log('REGISTER');
  //       console.log(res);
  //       setResponse(res.data);
  //       localStorage.setItem('token', res.data.token);
  //     })
  //     .catch((err) => {
  //       console.log('ERROR');
  //     });
  // };

  // const logout = (e: MouseEvent) => {
  //   e.preventDefault();
  //   console.log('REMOVED TOKEN');
  //   localStorage.clear();
  // };

  // const getUserInfo = (e: MouseEvent) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .get('/users')
  //     .then((res) => {
  //       console.log('GET USER INFORMATION');
  //       setResponse(res.data);
  //     });
  // };

  // const getUserStats = (e: MouseEvent) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .get('/userstats')
  //     .then((res) => {
  //       console.log('GET USER INFORMATION');
  //       console.log(res.data);
  //       setResponse(res.data);
  //     });
  // };

  // const setUserStats = (e: MouseEvent) => {
  //   e.preventDefault();
  //   axiosWithAuth()
  //     .post('/userstats', userStat)
  //     .then((res) => {
  //       console.log('SET USER INFORMATION');
  //       setResponse(res.data);
  //     });
  // };

  return (
    <Fragment>
      <ToastContainer position="bottom-right" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
