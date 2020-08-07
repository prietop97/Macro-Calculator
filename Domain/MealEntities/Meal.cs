using System;
using System.Collections.Generic;

namespace Domain.MealEntities
{
    public class Meal
    {
        public int Id { get; set; }
        public int GoogleId { get; set; }
        public string Title { get; set; }

        // FOREIGN KEYS
        public string Image { get; set; }

        public double CarbsGrams { get; set; }
        public double ProteinGrams { get; set; }
        public double FatGrams { get; set; }
        public double Calories { get; set; }

        public ICollection<UserMeals> UserMeals { get; set; }
    }
}
