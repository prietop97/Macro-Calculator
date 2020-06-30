namespace Application.MainDTOs
{
    public class MealPlanMealsDto
    {
        public double Servings { get; set; }
        public MealDto Meal { get; set; }
        public int Order { get; set; }
        public MealTypeDto MealType { get; set; }
    }
}