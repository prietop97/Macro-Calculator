namespace Domain.MealEntities
{
    public class MealTypes
    {
        public int Id { get; set; }
        public int MealTypeId { get; set; }
        public MealType MealType { get; set; }
        public int MealId { get; set; }
        public Meal Meal { get; set; }
    }
}