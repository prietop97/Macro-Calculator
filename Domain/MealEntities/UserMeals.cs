using System;
using Domain.UserEntities;

namespace Domain.MealEntities
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