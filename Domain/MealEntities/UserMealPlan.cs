using System;
using System.Collections.Generic;
using Domain.UserEntities;

namespace Domain.MealEntities
{
    public class UserMealPlan
    {
        public int Id { get; set; }
        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        public DateTime Date { get; set; }
        public ICollection<MealPlanMeals> MealPlanMeals { get; set; }

    }
}
