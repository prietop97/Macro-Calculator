using System;
namespace Application.MainDTOs
{
    public class UserStatsDto
    {
        public int Id { get; set; }

        // Goal
        public GoalDto Goal { get; set; }

        // Gender
        public GenderDto Gender { get; set; }

        // Activity Factor
        public ActivityFactorDto ActivityFactor { get; set; }

        // Height
        public HeightUnitDto HeightUnit { get; set; }
        public int Height { get; set; }
        // Rest
        public DateTime DateOfBirth { get; set; }
    }
}
