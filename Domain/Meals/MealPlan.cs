using System;
using System.Collections.Generic;
using Domain.Common;

namespace Domain.Meals
{
    public class MealPlan
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public int CreatorId { get; set; }
        public AppUser Creator { get; set; }

        public ICollection<MealPlanMeals> Meals { get; set; }

    }
}
