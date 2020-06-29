import React, { ReactElement, useContext } from 'react';
import { RootStoreContext } from '../stores/rootStore';
import LoginForm from '../../features/user/LoginForm';
import { observer } from 'mobx-react-lite';

function TestComponent(): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { user } = rootStore.userStore;
  return (
    <div>
      <LoginForm />
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
}

export default observer(TestComponent);
