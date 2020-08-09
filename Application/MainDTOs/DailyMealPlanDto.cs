using System;
using System.Collections.Generic;
namespace Application.MainDTOs
{
    public class DailyMealPlanDto
    {
        public int Id { get; set; }
        public ICollection<UserMealsDto> UserMeals { get; set; }
        public DateTime Date { get; set; }
        public int CarbsGrams { get; set; }
        public int ProteinGrams { get; set; }
        public int FatGrams { get; set; }
        public int Calories { get; set; }
    }
}