using System;
using System.Collections.Generic;
namespace Application.MainDTOs
{
    public class UserMealsDto
    {
        public MealDto Meal { get; set; }
        public MealTypeDto MealType { get; set; }
        public int Quantity { get; set; }
    }
}