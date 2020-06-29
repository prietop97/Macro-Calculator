using System;
using System.Collections.Generic;
using Domain.User;

namespace Domain.Meals
{
    public class Meal
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string CreatorId { get; set; }
        public AppUser Creator { get; set; }
        public int MealTypeId { get; set; }
        public MealType MealType { get; set; }
        public int Calories { get; set; }
        public ICollection<MealPlanMeals> MealPlansMeals { get; set; }
        public ICollection<UserMeals> UserMeals { get; set; }
    }
}
