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

export interface MealPreview {
  id: number;
  title: string;
  image: string;
  calories?: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface NutrientsQuery {
  minCarbs: number;
  minProtein: number;
  maxProtein: number;
  offset: number;
  maxCalories?: number;
  maxCarbs: number;
  minCalories?: number;
  maxFat: number;
  minFat: number;
}
