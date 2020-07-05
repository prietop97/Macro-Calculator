import React, { Fragment, useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/Homepage';
import NotFound from './pages/NotFound';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RegisterStatsPage from './pages/RegisterStatsPage';
import { RootStoreContext } from './stores/rootStore';
import PrivateRoute from './common/PrivateRoute';

function App() {
  const rootStore = useContext(RootStoreContext);
  const { appLoaded, setAppLoaded, token } = rootStore.commonStore;
  const { getUserInfo } = rootStore.userStore;

  useEffect(() => {
    if (token) {
      getUserInfo().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [getUserInfo, setAppLoaded, token]);

  // if (!appLoaded) return <h1>Loading...</h1>;
  return (
    <Fragment>
      <ToastContainer position="bottom-right" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <PrivateRoute path="/getmacros" component={RegisterStatsPage} />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
}

export default App;
