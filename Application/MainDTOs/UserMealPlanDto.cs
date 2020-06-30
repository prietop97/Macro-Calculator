using System;
using System.Collections.Generic;
namespace Application.MainDTOs
{
    public class UserMealPlanDto
    {
        public DateTime Date { get; set; }
        public ICollection<MealPlanMealsDto> MealPlanMeals { get; set; }
    }
}