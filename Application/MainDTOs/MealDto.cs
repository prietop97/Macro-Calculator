﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Application.MainDTOs
{
    public class MealDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Instructions { get; set; }
        public double TotalServings { get; set; }
        public double CarbsGrams { get; set; }
        public double ProteinGrams { get; set; }
        public double FatGrams { get; set; }
        public MealsIngredientsDto MealIngredients { get; set; }


    }
}
