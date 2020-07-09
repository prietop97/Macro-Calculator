import { ChangeEvent } from 'react';
import { observable, action, computed } from 'mobx';
import { RootStore } from './rootStore';
import { UserStatsFormPost } from '../models/user';

export default class UserStatsFormStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable genderId = 0;
  @observable activityFactorId = 0;
  @observable goalId = 0;
  @observable unitSystemId = 1;
  @observable dateOfBirth = new Date('2014-08-18T21:11:54');
  @observable feets: number | string = '';
  @observable inches: number | string = '';
  @observable weight = 175;
  @observable activeStep = 0;
  @observable steps = ['Credentials', 'Statistics', 'Goals'];
  @observable isLoading = false;

  @computed get totalHeight() {
    let height = 0;
    if (this.feets) height += +this.feets * 12;
    if (this.inches) height += +this.inches;
    return height;
  }
  @computed get finalFormValues(): UserStatsFormPost {
    return {
      genderId: this.genderId,
      activityFactorId: this.activityFactorId,
      goalId: this.goalId,
      unitSystemId: this.unitSystemId,
      dateOfBirth: this.dateOfBirth,
      height: this.totalHeight,
      weight: this.weight
    };
  }
  @action changeGender = (e: ChangeEvent<HTMLInputElement>): void => {
    this.genderId = +e.target.value;
  };
  @action changeActivityFactor = (e: ChangeEvent<HTMLInputElement>): void => {
    this.activityFactorId = +e.target.value;
  };
  @action changeGoal = (e: ChangeEvent<HTMLInputElement>): void => {
    this.goalId = +e.target.value;
  };
  @action changeFeets = (e: ChangeEvent<HTMLInputElement>): void => {
    this.feets = +e.target.value;
  };
  @action changeInches = (e: ChangeEvent<HTMLInputElement>): void => {
    this.inches = +e.target.value;
  };
  @action changeWeight = (
    e: ChangeEvent<{}>,
    weight: number | number[]
  ): void => {
    if (!Array.isArray(weight)) {
      this.weight = weight;
    }
  };
  @action handleNext = () => {
    if (this.activeStep === 2) {
      this.rootStore.userStatsStore.postUserStats(this.finalFormValues);
      console.log(this.finalFormValues);
      return;
    }
    this.activeStep += 1;
  };
  @action handleBack = () => {
    this.activeStep -= 1;
  };
}
