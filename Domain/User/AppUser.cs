using Domain.Meals;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Domain.User
{
    public class AppUser : IdentityUser
    {
        public UserStat UserStat { get; set; }

        public ICollection<UserMeals> SavedMeals { get; set; }
        public ICollection<UserMealPlans> SavedMealPlans { get; set; }
        public ICollection<Meal> CreatedMeals { get; set; }
        public ICollection<MealPlan> CreatedMealPlans { get; set; }
    }
}

