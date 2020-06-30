using System.Collections.Generic;
namespace Domain.MealEntities
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double CarbsGrams { get; set; }
        public double ProteinGrams { get; set; }
        public double FatGrams { get; set; }
        public ICollection<MealsIngredients> MealIngredients { get; set; }
    }
}
