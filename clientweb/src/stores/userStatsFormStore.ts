import { observable, action, reaction, computed } from 'mobx';
import { RootStore } from './rootStore';
import { UserStatsFormPost } from '../models/user';

const initialState = {
  genderId: 0,
  dateOfBirth: new Date('2014-08-18T21:11:54'),
  height: 0,
  weight: 175,
  activityFactorId: 0,
  goalId: 0,
  unitSystemId: 1
};
export default class UserStatsFormStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    reaction(
      () => this.height,
      (height) => {
        this.formValues.height = height.feets * 12 + height.inches;
      }
    );
  }
  @observable formValues: UserStatsFormPost = initialState;
  @observable height: { feets: number; inches: number } = {
    feets: 0,
    inches: 0
  };
  @observable activeStep = 0;
  @observable steps = ['Credentials', 'Statistics', 'Goals'];
  @observable isLoading = false;
}
