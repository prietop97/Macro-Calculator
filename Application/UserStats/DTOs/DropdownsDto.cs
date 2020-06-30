using System;
using System.Collections.Generic;
using System.Text;

namespace Application.UserStats.DTOs
{
    public class DropdownsDto
    {
        public List<ActivityFactorDto> ActivityFactors { get; set; }
        public List<GenderDto> Genders { get; set; }
        public List<GoalDto> Goals { get; set; }
        public List<UnitSystemDto> UnitSystems { get; set; }

    }
}
