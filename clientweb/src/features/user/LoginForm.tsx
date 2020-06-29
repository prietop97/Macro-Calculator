import React, { ReactElement, useContext } from 'react';
import { Form as FinalForm, Field } from 'react-final-form';
import { FORM_ERROR } from 'final-form';
import TextInput from '../../app/common/TextInput';
import { IUserFormValues } from '../../app/models/user';
import { RootStoreContext } from '../../app/stores/rootStore';

function LoginForm(): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { login } = rootStore.userStore;
  return (
    <FinalForm
      onSubmit={(values: IUserFormValues) =>
        login(values).catch((error) => ({
          [FORM_ERROR]: error
        }))
      }
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" component="input" placeholder="Email" />
          <Field
            name="password"
            component="input"
            placeholder="Password"
            type="password"
          />
          <button>Login</button>
        </form>
      )}
    />
  );
}

export default LoginForm;
