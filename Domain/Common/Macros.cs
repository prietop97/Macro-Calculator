using Domain.Meals;
using Domain.User;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Domain.Common
{
    public class Macros
    {
        public int Id { get; set; }
        public int Calories { get; set; }

        public int FatAmount { get; set; }
        public int FatPercentage { get; set; }
        public int FatCalories { get; set; }

        public int ProteinAmount { get; set; }
        public int ProteinPercentage { get; set; }
        public int ProteinCalories { get; set; }

        public int CarbsAmount { get; set; }
        public int CarbsPercentage { get; set; }
        public int CarbsCalories { get; set; }

        public UserMacros RecommendedUserMacros { get; set; }
        public UserMacros EditedUserMacros { get; set; }
        public Meal Meal { get; set; }
        public MealPlan MealPlan { get; set; }

    }
}
