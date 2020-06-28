using System;
using Domain.User;

namespace Domain.Meals
{
    public class UserMealPlans
    {
        public int Id { get; set; }

        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        public int MealPlanId { get; set; }
        public MealPlan MealPlan { get; set; }

    }
}
