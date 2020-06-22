using System;
using Domain.Common;

namespace Domain.Meals
{
    public class UserMealPlans
    {
        public int Id { get; set; }

        public int AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        public int MealPlanId { get; set; }
        public MealPlan MealPlan { get; set; }

        public bool IsActive { get; set; }
        public int DifferenceFromTarget { get; set; }
    }
}
