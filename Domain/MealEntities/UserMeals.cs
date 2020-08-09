using System;
using Domain.UserEntities;

namespace Domain.MealEntities
{
    public class UserMeals
    {
        public int MealId { get; set; }
        public Meal Meal { get; set; }

        public int DailyMealPlanId { get; set; }
        public DailyMealPlan DailyMealPlan { get; set; }

        public MealType MealType { get; set; }
        public int MealTypeId { get; set; }

        public int quantity { get; set; }


    }
}