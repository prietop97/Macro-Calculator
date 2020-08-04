using System;
namespace Application.UserStats.DTOs
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
        public double Height { get; set; }

        // Weight
        public UnitSystemDto UnitSystem { get; set; }
        public double Weight { get; set; }

        // Rest
        public DateTime DateOfBirth { get; set; }

    }
}
