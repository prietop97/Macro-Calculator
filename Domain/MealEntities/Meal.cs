using System;
using System.Collections.Generic;

namespace Domain.MealEntities
{
    public class Meal
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Instructions { get; set; }
        public double TotalServings { get; set; }

        // FOREIGN KEYS

        public double CarbsGrams { get; set; }
        public double ProteinGrams { get; set; }
        public double FatGrams { get; set; }


        public ICollection<MealTypes> MealTypes { get; set; }
        public ICollection<MealPlanMeals> MealPlansMeals { get; set; }
        public ICollection<UserMeals> UserMeals { get; set; }
        public ICollection<MealsIngredients> MealIngredients { get; set; }
    }
}
