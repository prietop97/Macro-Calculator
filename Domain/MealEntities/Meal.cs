using System;
using System.Collections.Generic;

namespace Domain.MealEntities
{
    public class Meal
    {
        public int Id { get; set; }
        public string Title { get; set; }

        // FOREIGN KEYS

        public int CarbsGrams { get; set; }
        public int ProteinGrams { get; set; }
        public int FatGrams { get; set; }
        public int Calories { get; set; }

        public ICollection<UserMeals> UserMeals { get; set; }
    }
}
