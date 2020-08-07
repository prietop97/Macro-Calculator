import { observable, action, runInAction, computed } from 'mobx';
import { DailyMealPlan, MealPreview, NutrientsQuery } from '../models/meals';
import agent from '../api/agent';
import { RootStore } from './rootStore';
import spoonAgent from '../api/spoonacularAgent';

export default class MealPlanStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable dailyMealPlan: DailyMealPlan | null = null;
  @observable suggestedMeals: MealPreview[] | null = null;
  @observable isLoading = true;
  @observable suggestedLoading = true;
  @observable activeDate = new Date('08/05/2020');

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
    if (this.dailyMealPlan && this.dailyMealPlan.meals) {
      this.dailyMealPlan.meals.forEach((x) => {
        macros.carbsGrams += x.carbs;
        macros.fatGrams += x.fat;
        macros.proteinGrams += x.protein;
        macros.calories += x.calories || 0;
      });
      macros.calories =
        macros.carbsGrams * 4 + macros.proteinGrams * 4 + macros.fatGrams * 9;
    }
    return macros;
  }
  @action getDailyMealPlan = async (date: Date): Promise<void> => {
    try {
      this.isLoading = true;
      console.log(date);
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
      runInAction('Get Suggested Meals', () => {
        const results = suggestedMeals.map((x) => {
          return {
            id: x.id,
            title: x.title,
            image: x.image,
            protein: Math.round(x.nutrition[0].amount),
            carbs: Math.round(x.nutrition[2].amount),
            fat: Math.round(x.nutrition[1].amount),
            calories: Math.round(
              x.nutrition[0].amount * 4 +
                x.nutrition[2].amount * 4 +
                x.nutrition[1].amount * 9
            )
          };
        });
        this.suggestedMeals = results;
        this.suggestedLoading = false;
        console.log(this.suggestedLoading);
      });
    } catch (error) {
      console.log(error);
    }
  };
}
