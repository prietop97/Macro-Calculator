using System;
namespace Domain.MealEntities
{
    public class MealPlanMeals
    {
        public int Id { get; set; }
        public double Servings { get; set; }
        public int? MealId { get; set; }
        public Meal Meal { get; set; }
        public int Order { get; set; }
        public int? UserMealPlanId { get; set; }
        public UserMealPlan UserMealPlan { get; set; }
        public int? MealTypeId { get; set; }
        public MealType MealType { get; set; }
    }
}
