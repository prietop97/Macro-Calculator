using System;
using System.Collections.Generic;
using Domain.Common;

namespace Domain.Meals
{
    public class MealPlan
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public string CreatorId { get; set; }
        public AppUser Creator { get; set; }

        public int MacrosId { get; set; }
        public Macros Macros { get; set; }

        public ICollection<MealPlanMeals> MealPlansMeals { get; set; }

        public ICollection<UserMealPlans> UserMealPlans { get; set; }

    }
}
