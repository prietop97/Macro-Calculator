using System.Collections.Generic;

namespace Domain.MealEntities
{
    public class MealType
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public ICollection<Meal> Meals { get; set; }
    }
}