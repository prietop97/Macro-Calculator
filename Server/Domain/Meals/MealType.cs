using System;
using System.Collections.Generic;

namespace Domain.Meals
{
    public class MealType
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public ICollection<Meal> Meals { get; set; }
    }
}
