export interface Macros {
  calories: number;
  carbsGrams: number;
  proteinGrams: number;
  fatGrams: number;
}

export interface MealPlan {
  calories: number;
  carbsGrams: number;
  proteinGrams: number;
  fatGrams: number;
}

export interface Meal {
  title: string;
  calories: number;
  carbsGrams: number;
  proteinGrams: number;
  fatGrams: number;
}

export const todayMacros: Macros = {
  calories: 2698,
  carbsGrams: 270,
  proteinGrams: 202,
  fatGrams: 90
};

export const todayConsumedMacros: Macros = {
  calories: 1445,
  carbsGrams: 30,
  proteinGrams: 10,
  fatGrams: 43
};

export const aMeal: Meal = {
  title: 'Burrito With Eggs and Cheese',
  calories: 560,
  carbsGrams: 45,
  proteinGrams: 56,
  fatGrams: 21
};
