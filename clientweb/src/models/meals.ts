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

export interface DailyMealPlan {
  id: number | null;
  carbsGrams: number;
  proteinGrams: number;
  fatGrams: number;
  calories: number;
  userMeals: UserMeals[];
  date: Date;
}

export interface UserMeals {
  meal: MealPreview;
  quantity: number;
}

export interface MealPreview {
  mealPlanId?: number | null;
  id: number;
  title: string;
  image: string;
  calories: number;
  proteinGrams: number;
  fatGrams: number;
  carbsGrams: number;
  mealType?: string;
}

export interface NutrientsQuery {
  minCarbs: number;
  minProtein: number;
  maxProtein: number;
  offset?: number;
  maxCalories?: number;
  maxCarbs: number;
  minCalories?: number;
  maxFat: number;
  minFat: number;
}
