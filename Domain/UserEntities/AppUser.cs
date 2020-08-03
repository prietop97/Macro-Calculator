using Domain.MealEntities;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Domain.UserEntities
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public UserStat UserStat { get; set; }

        // DAILY MACROS CONSUMED BY THE USER
        public ICollection<DailyMealPlan> DailyMealPlans { get; set; }
        public ICollection<UserMeals> UserMeals { get; set; }
    }
}

