import { observable, action, runInAction, computed } from 'mobx';
import { DailyMealPlan, MealPreview, NutrientsQuery } from '../models/meals';
import agent from '../api/agent';
import { RootStore } from './rootStore';
import spoonAgent from '../api/spoonacularAgent';
import { toJS } from 'mobx';

export default class MealPlanStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable dailyMealPlan: DailyMealPlan | null = null;
  @observable suggestedMeals: MealPreview[] | null = null;
  @observable isLoading = true;
  @observable suggestedLoading = true;
  @observable activeDate: Date = new Date('08/05/2020');
  @observable addMealLoading = false;
  @observable removeMealLoading = false;

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
    if (this.dailyMealPlan) {
      this.dailyMealPlan.userMeals.forEach((x) => {
        macros.carbsGrams += x.meal.carbsGrams * x.quantity;
        macros.fatGrams += x.meal.fatGrams * x.quantity;
        macros.proteinGrams += x.meal.proteinGrams * x.quantity;
        macros.calories += x.meal.calories * x.quantity;
      });
    }
    return macros;
  }
  @action getDailyMealPlan = async (date: Date): Promise<void> => {
    try {
      this.isLoading = true;
      const dailyMealPlan = await agent.MealPlan.current(date.toISOString());
      runInAction('Get Daily Mealplan', () => {
        this.dailyMealPlan = dailyMealPlan;
        this.isLoading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action getSuggestedMeals = async (
    queries: NutrientsQuery
  ): Promise<void> => {
    try {
      this.suggestedLoading = true;
      const suggestedMeals = await spoonAgent.Recipes.search(queries);
      console.log(suggestedMeals);
      runInAction('Get Suggested Meals', () => {
        const results = suggestedMeals.map((x) => {
          return {
            id: x.id,
            title: x.title,
            image: x.image,
            proteinGrams: Number(x.fat.split('g')[0]),
            carbsGrams: Number(x.carbs.split('g')[0]),
            fatGrams: Number(x.fat.split('g')[0]),
            calories: x.calories
          };
        });
        this.suggestedMeals = results;
        this.suggestedLoading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action addMeal = async (meal: MealPreview): Promise<void> => {
    try {
      this.addMealLoading = true;
      await agent.MealPlan.add({
        ...meal,
        mealPlanId: this.dailyMealPlan ? this.dailyMealPlan.id : null
      });
      runInAction('Get Suggested Meals', () => {
        this.getDailyMealPlan(this.activeDate);
        this.addMealLoading = false;
      });
    } catch (error) {
      console.log(error);
    }
  };
  @action changeActiveDate = (date: Date | undefined) => {
    if (date) this.activeDate = date;
  };

  @action removeMeal = async (mealId: number): Promise<void> => {
    this.removeMealLoading = true;
    await agent.MealPlan.remove(this.dailyMealPlan?.id!, mealId);
    runInAction('Remove meal', () => {
      this.getDailyMealPlan(this.activeDate);
      this.removeMealLoading = false;
    });
  };
}
