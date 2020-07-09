import React, { ReactElement, useContext } from 'react';
import RegistrationUserActivityLevel from './RegistrationUserActivityLevel';
import RegistrationUserStats from './RegistrationUserStats';
import RegistrationUserGoals from './RegistrationUserGoals';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/rootStore';

function RegistrationForm(): ReactElement {
  const rootStore = useContext(RootStoreContext);
  const { activeStep } = rootStore.userStatsFormStore;
  switch (activeStep) {
    case 0:
      return <RegistrationUserActivityLevel />;
    case 1:
      return <RegistrationUserStats />;
    case 2:
      return <RegistrationUserGoals />;
    default:
      return <>ERROR</>;
  }
}
export default observer(RegistrationForm);
