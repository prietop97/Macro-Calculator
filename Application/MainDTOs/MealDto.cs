using Domain.Common;
using System;
using System.Collections.Generic;
using System.Text;

namespace Application.MainDTOs
{
    public class MealDto
    {
        public int Id { get; set; }
        public string Description { get; set; }

        public Macros Macros { get; set; }

    }
}
