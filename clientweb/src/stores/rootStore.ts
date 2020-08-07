import { createContext } from 'react';
import { configure } from 'mobx';
import UserStore from './userStore';
import CommonStore from './commonStore';
import UserStatsStore from './userStatsStore';
import UserStatsFormStore from './userStatsFormStore';
import MealPlanStore from './mealPlanStore';

configure({ enforceActions: 'always' });

export class RootStore {
  userStore: UserStore;
  commonStore: CommonStore;
  userStatsStore: UserStatsStore;
  userStatsFormStore: UserStatsFormStore;
  mealPlanStore: MealPlanStore;
  constructor() {
    this.userStore = new UserStore(this);
    this.userStatsStore = new UserStatsStore(this);
    this.commonStore = new CommonStore(this);
    this.userStatsFormStore = new UserStatsFormStore(this);
    this.mealPlanStore = new MealPlanStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
