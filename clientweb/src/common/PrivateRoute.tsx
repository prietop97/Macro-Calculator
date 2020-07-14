import React, { ReactElement, ComponentType, useContext } from 'react';
import {
  RouteProps,
  Route,
  RouteComponentProps,
  Redirect
} from 'react-router-dom';
import { RootStoreContext } from '../stores/rootStore';
import { observer } from 'mobx-react-lite';

interface Props extends RouteProps {
  component: ComponentType<RouteComponentProps<any>>;
}

function PrivateRoute({ component: Component, ...rest }: Props): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { isLoggedIn } = rootStore.userStore;
  console.log(isLoggedIn);
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps<any>) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default observer(PrivateRoute);
