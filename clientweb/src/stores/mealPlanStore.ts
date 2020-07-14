import { observable, action, runInAction, computed } from 'mobx';
import { DailyMeals } from '../models/meals';
import agent from '../api/agent';
import { RootStore } from './rootStore';
import { history } from '../index';

export default class MealPlanStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable dailyMeals: DailyMeals | null = null;
  @observable isLoading = false;

  @computed get consumed(): {
    carbsGrams: number;
    fatGrams: number;
    proteinGrams: number;
    calories: number;
  } {
    const macros = {
      carbsGrams: 0,
      fatGrams: 0,
      proteinGrams: 0,
      calories: 0
    };
    if (this.dailyMeals) {
      this.dailyMeals.userMeals.forEach((x) => {
        macros.carbsGrams += x.carbsGrams;
        macros.fatGrams += x.fatGrams;
        macros.proteinGrams += x.proteinGrams;
      });
      macros.calories =
        macros.carbsGrams * 4 + macros.proteinGrams * 4 + macros.fatGrams * 9;
    }
    return macros;
  }
}
