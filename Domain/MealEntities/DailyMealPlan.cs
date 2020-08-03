using System;
using System.Collections.Generic;
using Domain.UserEntities;

namespace Domain.MealEntities
{
    public class DailyMealPlan
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string UserId { get; set; }
        public AppUser AppUser { get; set; }
        public int CarbsGrams { get; set; }
        public int ProteinGrams { get; set; }
        public int FatGrams { get; set; }
        public int Calories { get; set; }
        public ICollection<UserMeals> UserMeals { get; set; }

    }
}
