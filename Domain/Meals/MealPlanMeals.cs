using System;
namespace Domain.Meals
{
    public class MealPlanMeals
    {
        //public int Id { get; set; }

        public int MealId { get; set; }
        public Meal Meal { get; set; }

        public int MealPlanId { get; set; }
        public MealPlan MealPlan { get; set; }
    }
}
