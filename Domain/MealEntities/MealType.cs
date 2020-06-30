using System;
using System.Collections.Generic;

namespace Domain.MealEntities
{
    public class MealType
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public ICollection<MealTypes> MealTypes { get; set; }
        public MealPlanMeals MealPlanMeals { get; set; }
    }
}
