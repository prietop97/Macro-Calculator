export interface MealPlanBreakdown {
  carbsGrams: number;
  fatGrams: number;
  proteinGrams: number;
  id: number;
  mealType: MealType;
  order: number;
  date: Date;
}
export interface MealType {
  id: number;
  description: string;
}

export interface UserMeal {
  id: number;
  carbsGrams: number;
  fatGrams: number;
  proteinGrams: number;
  title: string;
  servings: number;
  mealPlanBreakdownId: number;
}

export interface DailyMeals {
  mealPlanBreakDown: MealPlanBreakdown[];
  userMeals: UserMeal[];
}
