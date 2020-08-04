using System;
using System.Collections.Generic;
using System.Text;

namespace Application.MainDTOs
{
    public class MealDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public int CarbsGrams { get; set; }
        public int ProteinGrams { get; set; }
        public int FatGrams { get; set; }
        public int Calories { get; set; }

    }
}
