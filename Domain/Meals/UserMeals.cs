using System;
using Domain.Common;

namespace Domain.Meals
{
    public class UserMeals
    {
        public int Id { get; set; }

        public string AppUserId { get; set; }
        public AppUser AppUser { get; set; }

        public int MealId { get; set; }
        public Meal Meal { get; set; }

    }
}